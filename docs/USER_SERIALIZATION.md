# User Serialization Pattern

## Problem

When passing Clerk user objects from server components to client components, you may encounter serialization errors like:

```text
Error: Only plain objects can be passed to Client Components from Server Components.
```

This happens because Clerk user objects contain methods and complex properties that cannot be serialized to JSON when crossing the server/client boundary.

## Solution

We use a simplified user object pattern that extracts only the serializable properties needed by client components.

### Implementation

#### 1. Create a Simplified User Type

```typescript
type SimpleUser = {
  firstName?: string | null;
  lastName?: string | null;
  imageUrl?: string;
  email?: string;
  id?: string;
};
```

#### 2. Extract User Data in Server Components

```typescript
// In any server component (page.tsx)
import { currentUser } from "@clerk/nextjs/server";

const user = await currentUser();
if (!user) redirect("/sign-in");

// Create a simplified user object with only serializable properties
const simpleUser = {
  firstName: user.firstName,
  lastName: user.lastName,
  imageUrl: user.imageUrl,
  email: user.emailAddresses[0]?.emailAddress,
  id: user.id
};
```

#### 3. Use in Client Components

```typescript
// In client component
"use client";

type SimpleUser = {
  firstName?: string | null;
  lastName?: string | null;
  imageUrl?: string;
  email?: string;
  id?: string;
};

export const MyClientComponent = ({ user }: { user: SimpleUser }) => {
  // Use the user data safely
  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      <p>{user.email}</p>
    </div>
  );
};
```

#### 4. Pass to Client Component

```typescript
// In server component JSX
<MyClientComponent user={simpleUser} />
```

### Utility Function (Optional)

For reusability, you can create a utility function:

```typescript
// lib/utils/user.ts
"use server";

import { User } from "@clerk/nextjs/server";

export function createSerializableUser(user: User | null) {
  if (!user) return null;
  
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    imageUrl: user.imageUrl,
    email: user.emailAddresses[0]?.emailAddress,
  };
}

export type SerializableUser = ReturnType<typeof createSerializableUser>;
```

## Components Using This Pattern

- `UserAvatar` - `/app/(root)/check-in/components/UserAvatar.tsx`
- `UserProfileCard` - `/components/UserProfileCard.tsx`

## Pages Implementing This Pattern

- Check-in page - `/app/(root)/check-in/page.tsx`
- Dashboard page - `/app/(root)/dashboard/page.tsx`
- Journal page - `/app/(root)/journal/page.tsx`

## Best Practices

1. **Only include necessary properties** - Don't serialize more data than you need
2. **Keep types in sync** - Ensure your client component types match the serialized object structure
3. **Handle null/undefined** - Always check if user exists before serializing
4. **Use consistent naming** - Use `simpleUser` or `serializableUser` for clarity
5. **Document usage** - Make it clear when components expect serialized vs full user objects

## Example Usage

```typescript
// ✅ Correct - Server Component
const MyPage = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  
  const simpleUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    imageUrl: user.imageUrl,
    email: user.emailAddresses[0]?.emailAddress,
    id: user.id
  };
  
  return <UserAvatar user={simpleUser} />;
};

// ❌ Incorrect - This will cause serialization error
const MyPage = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  
  return <UserAvatar user={user} />; // Don't pass full Clerk user object
};
```

This pattern ensures your application works correctly while maintaining clean separation between server and client components.
