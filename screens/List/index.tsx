import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { styles, StyledSearchBar, Container } from './style';
import GlobalState from '../../store';
import globalStyles from '../../constants/styles';
import { SectionHeader, CardMovie, Loader } from '../../components';
import { getMovieList } from '../../api/list';

export default ({ navigation }) => {
  const {
    test,
    movies,
    setMovies,
    series,
    setSeries,
    episodes,
    setEpisodes
  } = GlobalState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getMovieList({
      s: 'Star',
      type: 'movie',
      callback: data => {
        setMovies(data);
        setIsLoading(false);
        console.log('request sent');
      }
    });
    getMovieList({
      s: 'Star',
      type: 'series',
      callback: data => {
        setSeries(data);
        setIsLoading(false);
        console.log('request sent');
      }
    });
    getMovieList({
      s: 'Star',
      type: 'episode',
      callback: data => {
        setEpisodes(data);
        setIsLoading(false);
        console.log('request sent');
      }
    });
  }, []);

  useEffect(() => {
    if (search) {
      getMovieList({
        s: search,
        type: 'movie',
        callback: data => {
          setMovies(data);
          console.log('request sent');
        }
      });
      getMovieList({
        s: search,
        type: 'series',
        callback: data => {
          setSeries(data);
          setIsLoading(false);
          console.log('request sent');
        }
      });
      getMovieList({
        s: search,
        type: 'episode',
        callback: data => {
          setEpisodes(data);
          setIsLoading(false);
          console.log('request sent');
        }
      });
    }
  }, [search]);

  const handlePressMovie = (id: string) => {
    navigation.navigate('Detail', { id });
  };

  return (
    <React.Fragment>
      <SafeAreaView style={styles.SafeHeader}></SafeAreaView>
      <SafeAreaView style={globalStyles.Flex1}>
        <Container>
          <StyledSearchBar
            placeholder="Type Here..."
            onChangeText={setSearch}
            value={search}
            containerStyle={styles.SearchBar}
          />
          {!isLoading ? (
            <ScrollView contentContainerStyle={styles.ScrollView}>
              <View style={styles.SectionHeaderWrapper}>
                <SectionHeader>Movies on Theater</SectionHeader>
              </View>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.ScrollViewWrapper}
              >
                <View style={styles.SliderWrapper}>
                  {movies.map((m, index) => {
                    return (
                      <CardMovie
                        key={index}
                        movie={m}
                        onPress={handlePressMovie}
                      />
                    );
                  })}
                </View>
              </ScrollView>
              <View style={styles.SectionHeaderWrapper}>
                <SectionHeader>Series</SectionHeader>
              </View>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.ScrollViewWrapper}
              >
                <View style={styles.SliderWrapper}>
                  {series.map((m, index) => {
                    return (
                      <CardMovie
                        width={105}
                        height={155}
                        key={index}
                        movie={m}
                        onPress={handlePressMovie}
                      />
                    );
                  })}
                </View>
              </ScrollView>
              <View style={styles.SectionHeaderWrapper}>
                <SectionHeader>Episodes</SectionHeader>
              </View>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.ScrollViewWrapper}
              >
                <View style={styles.SliderWrapper}>
                  {episodes.map((m, index) => {
                    return (
                      <CardMovie
                        width={105}
                        height={155}
                        key={index}
                        movie={m}
                        onPress={handlePressMovie}
                      />
                    );
                  })}
                </View>
              </ScrollView>
            </ScrollView>
          ) : (
            <Loader />
          )}
        </Container>
      </SafeAreaView>
    </React.Fragment>
  );
};
