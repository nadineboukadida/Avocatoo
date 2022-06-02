import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import profil from "../../../../assets/girl.png";
import { Post as PostEntity } from "../../../Entity/Post";
import Tag from "../../../Components/Tags/Tag";

type Props = {
  post: PostEntity;
};

// style={styles.}
const Post = ({ post }: Props) => {
  return (
    <View style={styles.PostContainer}>
      <View style={[styles.Container]}>

        <View style={styles.tags}>
          <ScrollView horizontal={true} style={{}}>
             
  <Tag color ={"black"} text={"#newFeature"}></Tag>
              <Tag text={"#newLaw"} color ={"#FF6957"}></Tag>
              <Tag text={"#LawUpdate"} color ={"#AFC4A8"}></Tag>
              <Tag text={"#NewPost"} color ={"#AFC4A8"}></Tag>

            
              </ScrollView>
        </View>
        <View style={styles.Header}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Image style={styles.image} source={profil}></Image>
            <View style={{}}>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>
                {`${post.creator?.firstName} ${post.creator?.lastName}`}
              </Text>
              <Text style={{ color: "white" }}>{new Date(post.createdAt).toLocaleDateString()}</Text>
            </View>
          </View>
        </View>
        <View style={styles.Body}>
          <Text style={{ color: "black" }}>{`${post.content}`}</Text>
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
    // height: 190,
    // minHeight:160,
    width: "90%",
    backgroundColor:"#A6D3F2",
    padding: 15,
    paddingTop: 15,
    borderRadius: 10,
    justifyContent: "space-between",

    
  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop:-20
    paddingVertical:10
  },
  image: {
    width: 43,
    height: 43,
    borderRadius: 40,
    borderColor: "white",
    borderWidth: 3,
    marginLeft: -10,
    marginRight:10
  },
  tags: {
    flexDirection: "row",
    overflow: "scroll",
    width: "90%",
    alignSelf: "center",
  },
  Body: {
    padding: 10,
    width:'80%',
    alignSelf:"center",
    paddingTop: 0,
    // marginTop: 1,
    borderRadius: 10,
  },
});
