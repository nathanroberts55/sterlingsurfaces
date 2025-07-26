import type { PageServerLoad } from './$types';
import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ACCOUNT_ID, ACCESS_KEY_ID, SECRET_ACCESS_KEY } from '$env/static/private';

const BUCKET_NAME = 'r2-sterlingsurfaces';

const S3 = new S3Client({
	region: 'auto',
	endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
	credentials: {
		accessKeyId: ACCESS_KEY_ID,
		secretAccessKey: SECRET_ACCESS_KEY
	}
});

export const load: PageServerLoad = async ({ params }) => {
	const response = await S3.send(new ListObjectsV2Command({ Bucket: BUCKET_NAME }));
	const objects = response.Contents ?? [];

	// Generate signed URLs for each object key - For Private Bucket
	// const urls = await Promise.all(
	// 	objects.map(async (obj) => {
	// 		const key = obj.Key!;
	// 		const command = new GetObjectCommand({ Bucket: BUCKET_NAME, Key: key });
	// 		return await getSignedUrl(S3, command, { expiresIn: 3600 });
	// 	})
	// );

	// Generate URLs using the public bucket - might get rate limited
	const urls = objects.map((obj) => {
		const key = obj.Key;
		return `https://pub-628343764a3a4682a68a66159050e652.r2.dev/${key}`;
	});

	return {
		images: urls
	};
};
