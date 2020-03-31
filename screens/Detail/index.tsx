import React from "react";
import { StyleSheet, View } from "react-native";
import styled, { css } from "@emotion/native";

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const Description = styled.Text({
  color: "hotpink"
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default () => {
  return (
    <View style={styles.container}>
      <Container
        style={css`
          border-radius: 10px;
        `}
      >
        <Description style={{ fontSize: 45, fontWeight: "bold" }}>
          Detail Page
        </Description>
      </Container>
    </View>
  );
};
