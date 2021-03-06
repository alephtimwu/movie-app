import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';
import globalStyles from '../../constants/styles';
import {
  StyledCard,
  StyledPoster,
  StyledTitleWrapper,
  StyledTitle,
  StyledReviewWrapper,
  StyledRating,
  StyledReviews
} from './style';

interface MovieItem {
  Poster?: string;
  Title?: string;
  Year?: string;
  imdbID?: string;
  Type?: string;
}

interface CardMovieProps {
  movie: MovieItem;
  onPress?: (id) => void;
  width?: number;
  height?: number;
}

export default ({ movie, onPress, width, height }: CardMovieProps) => {
  const { Poster, Title, Year, imdbID } = movie;

  const handlePressMovie = () => {
    if (onPress) {
      onPress(imdbID);
    }
  };

  return (
    <StyledCard>
      <TouchableOpacity onPress={handlePressMovie} testID="card-press">
        <StyledPoster width={width} height={height} source={{ uri: Poster }} />
      </TouchableOpacity>
      <StyledTitleWrapper width={width}>
        <StyledTitle numberOfLines={1}>{Title}</StyledTitle>
      </StyledTitleWrapper>
      <StyledReviewWrapper>
        {/* <StyledRating>
          <Rating
            type="custom"
            showRating={false}
            readonly={true}
            ratingCount={5}
            imageSize={8}
          />
        </StyledRating> */}
        <StyledReviews>{Year}</StyledReviews>
        <StyledReviews>{` - ${imdbID}`}</StyledReviews>
      </StyledReviewWrapper>
    </StyledCard>
  );
};
