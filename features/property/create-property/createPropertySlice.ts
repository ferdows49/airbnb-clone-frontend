import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type createPropertyState = {
  step: number;
  propertyType: string | null;
  roomType: string | null;
  propertyAddress: {
    country: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
  basicInfo: {
    guests: number;
    bedrooms: number;
    beds: number;
    baths: number;
  };
  amenities: {
    guestFavorite: string[];
    standout: string[];
    safety: string[];
  };
  photos: File[];
  title: string;
  description: string;
  price: number;
};

const initialState: createPropertyState = {
  step: 0,
  propertyType: null,
  roomType: null,
  propertyAddress: {
    country: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
  },
  basicInfo: {
    guests: 1,
    bedrooms: 0,
    beds: 1,
    baths: 1,
  },
  amenities: {
    guestFavorite: [],
    standout: [],
    safety: [],
  },
  photos: [],
  title: "",
  description: "",
  price: 0,
};

const createPropertySlice = createSlice({
  name: "createProperty",
  initialState: initialState,
  reducers: {
    setPropertyCreateStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setPropertyType: (state, action: PayloadAction<string | null>) => {
      state.propertyType = action.payload;
    },
    setRoomType: (state, action: PayloadAction<string | null>) => {
      state.roomType = action.payload;
    },
    setPropertyAddress: (state, action: PayloadAction<any>) => {
      state.propertyAddress = action.payload;
    },
    setBasicInfo: (state, action: PayloadAction<any>) => {
      state.basicInfo = action.payload;
    },
    setAmenities: (state, action: PayloadAction<any>) => {
      state.amenities = action.payload;
    },
    setPhotos: (state, action: PayloadAction<File[]>) => {
      state.photos = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
  },
});

export const {
  setPropertyType,
  setRoomType,
  setPropertyCreateStep,
  setPropertyAddress,
  setBasicInfo,
  setAmenities,
  setPhotos,
  setDescription,
  setPrice,
  setTitle,
} = createPropertySlice.actions;
export default createPropertySlice.reducer;
