import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type createPropertyState = {
  propertyType: string | null;
  roomType: string | null;
};

const initialState: createPropertyState = {
  propertyType: null,
  roomType: null,
};

const createPropertySlice = createSlice({
  name: "createProperty",
  initialState: initialState,
  reducers: {
    setPropertyType: (state, action: PayloadAction<string | null>) => {
      state.propertyType = action.payload;
    },
    setRoomType: (state, action: PayloadAction<string | null>) => {
      state.roomType = action.payload;
    },
  },
});

export const { setPropertyType, setRoomType } = createPropertySlice.actions;
export default createPropertySlice.reducer;
