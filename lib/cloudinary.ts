import { v2 as cloudinary } from 'cloudinary';

// Cloudinary configuration - automatically uses CLOUDINARY_URL from .env
cloudinary.config({
    cloudinary_url: process.env.CLOUDINARY_URL,
});

interface UploadResult {
    secure_url: string;
    public_id: string;
    [key: string]: any;
}

interface UploadOptions {
    folder?: string;
    resourceType?: 'image' | 'video' | 'raw' | 'auto';
    transformation?: any[];
}

/**
 * Uploads a file to Cloudinary
 * @param file - File object from FormData
 * @param options - Upload options (folder, resourceType, etc.)
 * @returns Promise with upload result containing secure_url and public_id
 */
export async function uploadToCloudinary(
    file: File,
    options: UploadOptions = {}
): Promise<UploadResult> {
    const { folder = 'DevEvent', resourceType = 'image', transformation } = options;

    try {
        // Convert file to buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Upload to Cloudinary
        const result = await new Promise<UploadResult>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    resource_type: resourceType,
                    folder,
                    transformation,
                },
                (error, result) => {
                    if (error) {
                        reject(new Error(`Cloudinary upload failed: ${error.message}`));
                    } else if (result) {
                        resolve(result as UploadResult);
                    } else {
                        reject(new Error('Upload result is undefined'));
                    }
                }
            );

            uploadStream.end(buffer);
        });

        return result;
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw error;
    }
}

/**
 * Deletes a file from Cloudinary
 * @param publicId - The public ID of the file to delete
 * @param resourceType - Type of resource (image, video, raw)
 */
export async function deleteFromCloudinary(
    publicId: string,
    resourceType: 'image' | 'video' | 'raw' = 'image'
): Promise<void> {
    try {
        await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
    } catch (error) {
        console.error('Error deleting from Cloudinary:', error);
        throw error;
    }
}

export default cloudinary;
