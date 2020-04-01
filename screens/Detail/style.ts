import styled, { css } from '@emotion/native';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
// css`
//     border-radius: 10px;
// `
export const styles = StyleSheet.create({
  SafeHeader: {
    flex: 0,
    backgroundColor: '#1d1d27'
  },
  ScrollView: {
    width: 375,
    backgroundColor: '#1D1D27'
  }
});

export const Container = styled.View`
  flex: 1;
  background-color: #1d1d27;
`;

export const PosterWrapper = styled.View`
  position: relative;
`;

export const PosterHeading = styled.View`
  position: absolute;
  bottom: 33px;
  left: 25px;
  right: 25px;
  z-index: 10;
`;

export const PosterTitle = styled.Text`
  font-family: Montserrat;
  color: #fff;
  font-size: 29px;
  line-height: 29px;
  margin-right: 8px;
  max-width: 280px;
`;

export const PosterDate = styled.Text`
  font-family: Montserrat;
  color: #fff;
  font-size: 13px;
  line-height: 13px;
`;

export const PosterGenreWrapper = styled.View`
  border: 1px solid #9da3b4;
  border-radius: 5px;
  padding-left: 7px;
  padding-right: 7px;
  margin-right: 8px;
`;

export const PosterGenre = styled.Text`
  font-family: Montserrat;
  color: #9da3b4;
  font-size: 11px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
`;

export const Spliter = styled.View`
  height: 1px;
  background-color: #484855;
  margin-bottom: 20px;
  margin-left: 25px;
  margin-right: 25px;
`;

export const MetaScoreWrapper = styled.View`
  height: 20px;
`;

export const MetaScore = styled.Text`
  font-family: Montserrat;
  line-height: 24px;
  font-size: 20px;
  color: #86e996;
  text-align: center;
`;

export const MetaScoreLabelWrapper = styled.View`
  height: 26px;
`;

export const MetaScoreLabel = styled.Text`
  font-family: Montserrat;
  line-height: 26px;
  color: #fff;
  font-size: 13px;
  text-align: center;
`;
export const CriticalViewWrapper = styled.View`
  height: 13px;
`;
export const CriticalViews = styled.Text`
  font-family: Montserrat;
  line-height: 13px;
  color: #9da3b4;
  font-size: 10px;
  text-align: center;
`;

export const IconStar = styled.Image`
  width: 17px;
  height: 17px;
  margin: 0 auto;
`;

export const IconMovie = styled.Image`
  width: 17px;
  height: 17px;
  margin: 0 auto;
`;

export const IconTri = styled.Image`
  width: 7px;
  height: 5px;
  margin-left: 4px;
`;

export const MovieRating = styled(MetaScoreLabel)`
  font-size: 20px;
  color: #f95862;
`;

export const PropertyLabel = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: #9da3b4;
  font-family: Montserrat;
`;
export const PropertyValue = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: #fff;
  font-family: Montserrat;
`;

export const StoryLineDesc = styled.Text`
  color: #9da3b4;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  font-family: Montserrat;
`;

export const ActorName = styled.Text`
  color: #fff;
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  font-family: Montserrat;
  max-width: 90px;
`;
