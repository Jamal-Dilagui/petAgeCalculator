import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  humanEquivalent: 0,
  modelText: '',
  petType: 'dog'
};

const calculateDogAge = (dogAge, size) => {
  // First year counts as 15 human years
  if (dogAge === 1) return 15;
  
  // Second year counts as 9 human years
  if (dogAge === 2) return 24;
  
  // After that, the rate depends on the size
  const sizeRates = {
    small: 4,    // Small dogs age slower
    medium: 5,   // Medium dogs age at a moderate rate
    large: 6,    // Large dogs age faster
    giant: 7     // Giant dogs age the fastest
  };
  
  // Calculate remaining years after the first two years
  const remainingYears = dogAge - 2;
  const rate = sizeRates[size.toLowerCase()];
  
  // Base calculation (24 from first two years) + remaining years * rate
  return Math.round(24 + (remainingYears * rate));
};

const calculateCatAge = (catAge) => {
  // First year counts as 15 human years
  if (catAge === 1) return 15;
  
  // Second year counts as 9 human years
  if (catAge === 2) return 24;
  
  // After that, cats age at a rate of 4 human years per cat year
  const remainingYears = catAge - 2;
  return Math.round(24 + (remainingYears * 4));
};

const ageSlice = createSlice({
  name: 'petAge',
  initialState,
  reducers: {
    calculateAge: (state, action) => {
      const { ageValue, sizeValue, petType } = action.payload;
      let humanAge;
      
      if (petType === 'cat') {
        humanAge = calculateCatAge(Number(ageValue));
        state.modelText = `Your cat is like a ${humanAge}-year-old human!`;
      } else {
        humanAge = calculateDogAge(Number(ageValue), sizeValue);
        state.modelText = `Your ${sizeValue} dog is like a ${humanAge}-year-old human!`;
      }
      
      state.humanEquivalent = humanAge;
      state.petType = petType;
    }
  }
});

export const { calculateAge } = ageSlice.actions;
export default ageSlice.reducer;