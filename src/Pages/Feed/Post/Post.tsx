import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import profil from "../../../../assets/girl.png";
import { Post as PostEntity } from "../../../Entity/Post";

type Props = {
  post: PostEntity
}

// style={styles.}
const Post = ({post}: Props) => {
  return (
    <View style={styles.PostContainer}>
      <View style={[styles.Container]}>
        <View style={styles.tags}>
          {/* tags */}
        </View>
        <View style={styles.Header}>
          <View
            style={{
              flexDirection: "row",
              width: "50%",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Image style={styles.image} source={profil}></Image>
            <View style={{}}>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>
                {`${post.creator?.firstName} ${post.creator?.lastName}`}
              </Text>
              <Text style={{ color: "white" }}>{new Date(post.createdAt)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.Body}>
          <Text style={{ color: "black" }}>
            {`${post.content}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  PostContainer: {
    marginBottom: 5,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  Container: {
    height: 190,
    width: "90%",
    padding: 15,
    paddingTop: 15,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 43,
    height: 43,
    borderRadius: 40,
    borderColor: "white",
    borderWidth: 3,
    marginLeft: -10,
  },
  tags: {
    flexDirection: "row",
    overflow: "scroll",
    width: "90%",
    alignSelf: "center",
  },
  Body: {
    padding: 10,
    paddingTop: 0,
    marginTop: 1,
    borderRadius: 10,
  },
});
