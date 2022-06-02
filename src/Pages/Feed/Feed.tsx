import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import LPinfo from "../HomePage/LPinfo/LPinfo";
import { Category as CategoryEntity } from "../../Entity/Category";
import { useState } from "react";
import { Post as PostEntity } from "../../Entity/Post";
import { FeedService } from "../../Services/Feed/FeedService";
import { CategoryService } from "../../Services/Category/CategoryService";
import Category from "./Category/Category";
import Post from "./Post/Post";
import { User } from "../../Entity/User";
import { UserService } from "../../Services/User/UserService";

const Feed = ({ navigation }: any) => {
  const [posts, setPosts] = useState<PostEntity[]>([]);
  const [categories, setCategories] = useState<CategoryEntity[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryEntity | null>(null);
  const [lps, setLps] = useState<User[]>([]);

  useEffect(() => {
    (async function getData() {
      const receivedPosts = await FeedService.getAll();
      const receivedCategories = await CategoryService.getAll();
      const receivedLps = await UserService.getLps();
      setPosts(receivedPosts);
      setCategories(receivedCategories);
      setLps(receivedLps);
    })();
  }, []);

  return (
    <View style={{ paddingBottom: 110 }}>
      <View style={{ width: "90%", alignSelf: "center", paddingBottom: 5 }}>
        <ScrollView horizontal={true}>
          {categories.map((category) => (
            <TouchableOpacity
              key={Math.random()}
              onPress={() => setSelectedCategory(category)}
            >
              <Category text={category.name} color={"#A9498E"} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.LPlist}>
        <ScrollView horizontal={true}>
          {lps.map((lp) => (
            <TouchableOpacity
              key={Math.random()}
              style={{ alignItems: "center" }}
              onPress={() => navigation.navigate("LpProfile", { id: lp.id })}
            >
              <LPinfo />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView>
        {posts.map((post) => (
          <Post post={post} key={Math.random()} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  LPlist: {
    width: "100%",
    // flex: 1,
    paddingTop: 1,
  },
});
