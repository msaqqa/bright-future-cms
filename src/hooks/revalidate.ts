// hooks/revalidate.ts
export const revalidateAll = async () => {
  await fetch(`${process.env.SERVER_URL}/api/revalidate`, {
    method: 'POST',
    headers: {
      'x-revalidate-secret': process.env.REVALIDATE_SECRET!,
    },
  })
}
