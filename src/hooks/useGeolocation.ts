import { useEffect, useState } from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

declare global {
  interface Window {
    kakao: any;
  }
}

const useGeolocation = () => {
  const [location, setLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const geocoder = new window.kakao.maps.services.Geocoder();

        const callback = function (result: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            setAddress(result[0].address.address_name);
          }
        };

        const coord = new window.kakao.maps.LatLng(
          location.latitude,
          location.longitude,
        );
        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
      });
    };
  }, [location]);

  return {
    location,
    address,
  };
};

export default useGeolocation;
