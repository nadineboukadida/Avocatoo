import React, {useState} from "react";
import {Avatar, Box, Heading, HStack, ScrollView, Text, VStack} from "native-base";

import {Spacer} from "@react-native-material/core";
import {Button} from "native-base";

export default function FeedTickets() {
    const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Johnny Depp ",
        timeStamp: "12:47 PM",
        recentText: "I got beaten up by my wife what should I do ?",
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Ismail",
        timeStamp: "11:11 PM",
        recentText: "I am in police Station I need help ?",
    }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "salem",
        timeStamp: "6:22 PM",
        recentText: "question1",
    }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "nadine",
        timeStamp: "8:56 PM",
        recentText: "question 21",
    }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Yasmine",
        timeStamp: "12:47 PM",
        recentText: "I got dumped by a friend what should I do ?",
    },
        {
            id: "28694a0f-3da1-471f-bd96-142456e29kd72",
            fullName: "Unknown ",
            timeStamp: "12:47 PM",
            recentText: "question5",
        },
        {
            id: "28694a0f-3da1-471f-bd96-142456e29d72k",
            fullName: "llll",
            timeStamp: "12:47 PM",
            recentText: "I had a car accident what should I do ?",

        }, {
            id: "28694a0f-3da1-471f-bdc96-142456e29d72",
            fullName: "kflodrews",
            timeStamp: "12:47 PM",
            recentText: "question96",
        }];
    return (<Box>
        <Heading fontSize="xl" p="4" pb="3">
            Tickets à repondre
        </Heading>
        <ScrollView maxW="100%" h="65%" _contentContainerStyle={{
            px: "20px",
            mb: "4",
            minW: "72"
        }}>
            {data.map((item) =>
                <Box borderBottomWidth="1" _dark={{
                    borderColor: "gray.600"
                }} borderColor="coolGray.200" pl="4" pr="5" py="2"
                     key={item.id}>
                    <HStack space={3} justifyContent="space-between">
                        <VStack style={{width: "50%"}}>
                            <Text _dark={{
                                color: "warmGray.50"
                            }} color="coolGray.800" bold>
                                {item.fullName}
                            </Text>
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                {item.recentText}
                            </Text>
                        </VStack>
                        <Spacer/>
                        <VStack style={{display:"flex", flexDirection:"row",justifyContent:"space-between" }}>
                            <Text fontSize="xs" _dark={{
                                color: "warmGray.50"
                            }} color="coolGray.800" alignSelf="flex-start">
                                {item.timeStamp}
                            </Text>
                            <Box alignItems="center" marginLeft={3}>
                                <Button bgColor={"#AFC4A8"}
                                        onPress={() => console.log("hello world")}>Repondre</Button>
                            </Box>
                        </VStack>


                    </HStack>
                </Box>)
            }
        </ScrollView>
    </Box>);
};