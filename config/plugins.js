module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('WASABI_ACCESS_KEY_ID'),
        secretAccessKey: env('WASABI_ACCESS_SECRET'),
        region: env('WASABI_REGION'),
        params: {
          ACL: env('WASABI_ACL', 'public-read'),
          signedUrlExpires: env('WASABI_SIGNED_URL_EXPIRES', 15 * 60),
          Bucket: env('WASABI_BUCKET'),
        },
        endpoint: env('WASABI_END_POINT'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
