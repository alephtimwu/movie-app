import styled from '@emotion/native';

export const StyledCard = styled.View`
  margin-right: 20px;
`;
export const StyledPoster = styled.Image`
  ${({ width }) => `width: ${width || 230}px;`}
  ${({ height }) => `height: ${height || 340}px;`}
`;

export const StyledTitleWrapper = styled.View`
  margin-top: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  ${({ width }) => `width: ${width ? width - 20 : 210}px;`}
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
