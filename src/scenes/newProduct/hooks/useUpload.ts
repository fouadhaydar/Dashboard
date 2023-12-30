// const MAX_FILE_SIZE = 5000000 // 5 MB

// export class FileTooLargeError extends Error {
//     constructor(
//       message = `Images cannot be larger than ${MAX_FILE_SIZE / 1000000}MB.`
//     ) {
//       super(message)
//     }
//   }

// const uploadFile = async (file: File) => {
//     try {
//       const res = await fetch('/api/image/presign', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           fileType: file.type,
//         }),
//       })

//       const data = await res.json()

//       const { fields, getUrl, postUrl } = s3ResponseSchema.parse(data)

//       const outboundToS3 = {
//         ...fields,
//         'Content-Type': file.type,
//         file,
//       }

//       const formData = new FormData()

//       Object.entries(outboundToS3).forEach(([key, value]) => {
//         formData.append(key, value)
//       })

//       try {
//         // Upload to S3
//         await fetch(postUrl, {
//           method: 'POST',
//           body: formData,
//         })
//       } catch (error) {
//         throw new FileTooLargeError()
//       }

//       return { getUrl }
//     } catch (error) {
//       if (error instanceof FileTooLargeError) {
//         throw new FileTooLargeError()
//       }

//       throw new Error('Internal Server Error')
//     }
//   }

// export const useUpload = () => {
//     const upload = async (file: File) => {
//         try {
//           if (file.size > 5) throw new FileTooLargeError()

//           // Single file upload
//           const singleFile = file as File

//           const { getUrl } = await uploadFile(singleFile)

//           return { getUrl, error: false }
//         } catch (error) {
//           if (error instanceof FileTooLargeError) {
//             // toast({
//             //   title: 'Image Too Large',
//             //   description: error.message,
//             // })

//             console.log('image too large')

//             return { getUrl: null, error: true }
//           }

//         //   toast({
//         //     title: 'Internal Server Error',
//         //     description: 'There was an error uploading your image.',
//         //   })

//         console.log('internal sever error')

//           return { getUrl: null, error: true }
//         }
//       }

//       return { upload }
// }
