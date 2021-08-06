// this file makes the connection between the nextjs app and sanity.io cms

import {
  createClient,
  createPreviewSubscriptionHook,
  createImageUrlBuilder,
  createPortableTextComponent,
} from "next-sanity";

const config = {
  projectId: "7pmtofb9",
  dataset: "production",
  apiVersion: "v2021-06-07",
  useCdn: false,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const urlFor =(source) => createImageUrlBuilder(config).image(source)

export const  PortableText =  createPortableTextComponent({
    ...config,
    serializers:{}
})
