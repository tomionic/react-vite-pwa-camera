import { IonContent, IonButton, IonHeader, IonPage, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string | undefined>();

  const handleCapture = async () => {
    if (!isPlatform('capacitor')) {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.onchange = () => {
        if (fileInput.files && fileInput.files.length > 0) {
          const file = fileInput.files[0];
          const url = URL.createObjectURL(file);
          setPhotoUrl(url);
        }
      };
      fileInput.click();
      return;
    }

    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      setPhotoUrl(photo.dataUrl);
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  };

  return (
    <div>
      <button onClick={handleCapture}>Take Photo</button>
      {photoUrl && <img src={photoUrl} alt="Captured photo" />}
    </div>
  );
};

export default Tab1;
