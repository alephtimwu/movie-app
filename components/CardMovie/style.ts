import styled from '@emotion/native';

export const StyledCard = styled.View`
  margin-right: 20px;
`;
export const StyledPoster = styled.Image`
  width: 230px;
  height: 340px;
`;

export const StyledTitleWrapper = styled.View`
  margin-top: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 210px;
`;
export const StyledTitle = styled.Text`
  text-align: left;
  font-family: Montserrat;
  color: #fff;
  font-size: 16px;
  line-height: 16px;
`;

export const StyledReviewWrapper = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledRating = styled.View`
  background-color: #1d1d27;
  margin-right: 5px;
`;

export const StyledReviews = styled.Text`
  text-align: left;
  font-family: Montserrat;
  color: #fff;
  font-size: 10px;
  line-height: 10px;
`;
