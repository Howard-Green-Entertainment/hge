import { storage } from '../config/firebaseConfig';


export const imageUpload = () => {
    const { newImage, imageUrls } = this.state;
    const uploadTask = storage.ref('images').put(newImage);
    uploadTask.on('state_changed', 
    (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({ imgProgress: progress });
    }, 
    (error) => {
        console.log('Error uploading file', error);
    }, 
    () => {
        storage.ref('images').child(newImage.name).getDownloadURL()
        .then(url => { 
            this.setState({ imageUrls: [...imageUrls, url] })
        })
    });
}

export const videoUpload = () => {
    const { newVideo, videoUrls } = this.state;
    const uploadTask = storage.ref(`/videos`).put(newVideo);
    uploadTask.on('state_changed', 
    (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({ videoProgress: progress });
    }, 
    (error) => {
        console.log('Error uploading file', error);
    }, 
    () => {
        storage.ref('videos').child(newVideo.name).getDownloadURL()
        .then(url => { 
            this.setState({ videoUrls: [...videoUrls, url] })
        })
    });
}

export const pdfUpload = () => {
    const { newPdf, pdfUrls } = this.state;
    const uploadTask = storage.ref('pdfs').put(newPdf);
    uploadTask.on('state_changed', 
    (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({ pdfProgress: progress });
    }, 
    (error) => {
        console.log('Error uploading file', error);
    }, 
    () => {
        storage.ref('pdfs').child(newPdf.name).getDownloadURL()
        .then(url => { 
            this.setState({ pdfUrls: [...pdfUrls, url] })
        })
    });
}
