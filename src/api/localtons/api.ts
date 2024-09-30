import { Tinh } from "../../interface/locations/interface";

export const fetchTinhs = async (): Promise<Tinh[]> => {
  const response = await fetch(`https://esgoo.net/api-tinhthanh/1/0.htm`);
  const data = await response.json();
  if (data.error !== 0) {
    throw new Error(data.error_text);
  }
  return data.data;
};

export const fetchHuyens = async (idTinh: string) => {
  const response = await fetch(
    `https://esgoo.net/api-tinhthanh/2/${idTinh}.htm`
  );
  const data = await response.json();
  if (data.error != 0) {
    throw new Error(data.error_text);
  }
  return data.data;
};

export const fetchXas = async (idHuyen: string) => {
  const response = await fetch(
    `https://esgoo.net/api-tinhthanh/3/${idHuyen}.htm`
  );
  const data = await response.json();
  if (data.error !== 0) {
    throw new Error(data.error_text);
  }
  return data.data;
};
