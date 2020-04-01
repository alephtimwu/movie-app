import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import {
  styles,
  Container,
  PosterWrapper,
  PosterHeading,
  PosterTitle,
  PosterDate,
  PosterGenre,
  Spliter,
  PosterGenreWrapper,
  MetaScoreWrapper,
  MetaScore,
  MetaScoreLabelWrapper,
  MetaScoreLabel,
  CriticalViewWrapper,
  CriticalViews,
  IconStar,
  IconMovie,
  IconTri,
  MovieRating,
  PropertyLabel,
  PropertyValue,
  StoryLineDesc,
  ActorName
} from './style';
import GlobalState from '../../store';
import { SectionHeader, Loader } from '../../components';
import globalStyles from '../../constants/styles';
import { getMovieDetail } from '../../api/detail';

export default ({ route, navigation }) => {
  const { test, movie, setMovie } = GlobalState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  // const id = 'tt4154664';
  const { id } = route.params;
  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Ratings,
    Metascore,
    imdbRating,
    imdbVotes,
    imdbID,
    Type,
    DVD,
    BoxOffice,
    Production,
    Website,
    Response
  } = movie;

  useEffect(() => {
    getMovieDetail({
      i: id,
      callback: data => {
        setMovie(data);
        setIsLoading(false);
        console.log('request sent');
      }
    });
  }, []);

  const genres = Genre ? Genre.split(',') : [];
  const actors = Actors ? Actors.split(',') : [];

  return (
    <React.Fragment>
      <SafeAreaView style={styles.SafeHeader}></SafeAreaView>
      <SafeAreaView style={globalStyles.Flex1}>
        <Container>
          {!isLoading ? (
            <ScrollView contentContainerStyle={styles.ScrollView}>
              <PosterWrapper>
                <Image
                  style={{ width: 375, height: 466 }}
                  source={{
                    uri: Poster
                  }}
                ></Image>
                <LinearGradient
                  colors={['transparent', '#1D1D27']}
                  start={[1, 0]}
                  end={[0, 0]}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    zIndex: 10,
                    width: 25,
                    height: '100%'
                  }}
                ></LinearGradient>
                <LinearGradient
                  colors={['transparent', '#1D1D27']}
                  start={[0, 0]}
                  end={[1, 0]}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    zIndex: 10,
                    width: 25,
                    height: '100%'
                  }}
                ></LinearGradient>
                <LinearGradient
                  colors={['transparent', '#1D1D27']}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    width: '100%',
                    height: 120
                  }}
                >
                  <PosterHeading>
                    <View
                      style={[
                        globalStyles.Flex,
                        globalStyles.FlexLeft,
                        globalStyles.FlexBottom
                      ]}
                    >
                      <PosterTitle numberOfLines={1}>{Title}</PosterTitle>
                      <PosterDate>({Year})</PosterDate>
                    </View>
                    <View
                      style={[
                        globalStyles.Flex,
                        globalStyles.FlexLeft,
                        globalStyles.FlexBottom,
                        { marginTop: 12 }
                      ]}
                    >
                      {genres.map((g, index) => {
                        return (
                          <PosterGenreWrapper key={index}>
                            <PosterGenre>{g.replace(' ', '')}</PosterGenre>
                          </PosterGenreWrapper>
                        );
                      })}
                    </View>
                  </PosterHeading>
                </LinearGradient>
              </PosterWrapper>
              <Spliter />
              <View
                style={[globalStyles.Flex, { marginLeft: 25, marginRight: 25 }]}
              >
                <View style={[globalStyles.Flex1]}>
                  <MetaScoreWrapper>
                    <MetaScore>{Metascore}</MetaScore>
                  </MetaScoreWrapper>
                  <MetaScoreLabel>Metascore</MetaScoreLabel>
                  <CriticalViewWrapper>
                    <CriticalViews>53 Critic Reviews</CriticalViews>
                  </CriticalViewWrapper>
                </View>
                <View style={[globalStyles.Flex1]}>
                  <MetaScoreWrapper>
                    <Icon
                      type="font-awesome"
                      name="star"
                      color="#F95862"
                      size={17}
                    ></Icon>
                  </MetaScoreWrapper>
                  <MetaScoreLabel>
                    <Text style={{ fontSize: 20, color: '#fff' }}>
                      {imdbRating}
                    </Text>{' '}
                    / 10
                  </MetaScoreLabel>
                  <CriticalViewWrapper>
                    <CriticalViews>53 Critic Reviews</CriticalViews>
                  </CriticalViewWrapper>
                </View>
                <View style={[globalStyles.Flex1]}>
                  <MetaScoreWrapper>
                    <IconMovie
                      source={require('../../assets/icon-movie.png')}
                    />
                  </MetaScoreWrapper>
                  <View style={[globalStyles.Flex]}>
                    <MovieRating>{imdbVotes}</MovieRating>
                    <IconTri source={require('../../assets/icon-tri.png')} />
                  </View>
                  <CriticalViewWrapper>
                    <CriticalViews>53 Critic Reviews</CriticalViews>
                  </CriticalViewWrapper>
                </View>
              </View>
              <Spliter style={{ marginTop: 20 }} />
              <View
                style={[
                  globalStyles.Flex,
                  globalStyles.FlexLeft,
                  globalStyles.FlexTop,
                  { marginLeft: 25, marginRight: 25 }
                ]}
              >
                <Image
                  source={{ uri: Poster }}
                  style={{ width: 105, height: 155, borderRadius: 6 }}
                />
                <View style={[globalStyles.Flex1, { marginLeft: 24 }]}>
                  <View>
                    <PropertyLabel>Title:</PropertyLabel>
                    <PropertyValue>{Title}</PropertyValue>
                  </View>
                  <View>
                    <PropertyLabel>Running Time:</PropertyLabel>
                    <PropertyValue>{Runtime}</PropertyValue>
                  </View>
                  <View>
                    <PropertyLabel>Release Date:</PropertyLabel>
                    <PropertyValue>{Released}</PropertyValue>
                  </View>
                  <View>
                    <PropertyLabel>Director:</PropertyLabel>
                    <PropertyValue>{Director}</PropertyValue>
                  </View>
                  <View>
                    <PropertyLabel>Writer:</PropertyLabel>
                    <PropertyValue>{Writer}</PropertyValue>
                  </View>
                </View>
              </View>
              <Spliter style={{ marginTop: 20 }} />
              <View style={{ marginLeft: 25, marginRight: 25 }}>
                <SectionHeader moreText=" ">Storyline</SectionHeader>
                <View style={{ marginTop: 20 }}>
                  <StoryLineDesc>{Plot}</StoryLineDesc>
                </View>
              </View>
              <Spliter style={{ marginTop: 20 }} />
              <View
                style={{
                  marginTop: 20,
                  marginLeft: 25,
                  marginRight: 25,
                  marginBottom: 70
                }}
              >
                <SectionHeader moreText="SEE ALL">
                  Full Cast & Crew
                </SectionHeader>
                <ScrollView horizontal={true} style={{ marginTop: 20 }}>
                  {actors.map((a, index) => {
                    return (
                      <View style={{ marginRight: 20 }} key={index}>
                        <Image
                          source={require('../../assets/avatar.png')}
                          style={{ width: 105, height: 105, borderRadius: 7 }}
                        />
                        <View style={{ marginTop: 10 }}>
                          <ActorName numberOfLines={2}>{a.trim()}</ActorName>
                        </View>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
              <TouchableOpacity style={{ width: '100%' }}>
                <LinearGradient
                  colors={['#FD8F61', '#F84B62', '#74398A']}
                  style={{ height: 90 }}
                >
                  <Text
                    style={{
                      lineHeight: 90,
                      color: '#fff',
                      fontSize: 14,
                      textAlign: 'center',
                      fontFamily: 'Montserrat'
                    }}
                  >
                    BUY TICKET
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </ScrollView>
          ) : (
            <Loader />
          )}
        </Container>
      </SafeAreaView>
    </React.Fragment>
  );
};
