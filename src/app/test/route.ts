import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  })

  try {
    return Response.json(await payload.find({
      collection: "product-categories",
      joins: { relatedProducts: { count: true } }
    }));
  } catch(e: any) {
    return new Response(e?.stack ?? e?.message ?? `${e}`, { status: 500 });
  }
}
