import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './restaurantCard'
import { getFeaturedRestaurantById } from '../api'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme'

export default function FeaturedRow({id, title, description, restaurants}) {

  // const [resturants, setResturants] = useState([]);

  useEffect(() => {
    // getFeaturedResturantById(id).then(data=>{
    //   // console.log('got data: ',data);
    //   setResturants(data?.resturants);
    // })
  }, [id])
  // console.log(resturants);
  
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">
            {description}
          </Text>
        </View>
        
        <TouchableOpacity>
          <Text style={{color: themeColors.text}} className="font-semibold">See All</Text>
        </TouchableOpacity>
      </View>

      

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className="overflow-visible py-5"
       >
        {
          restaurants.map(restaurant=>{
            return (
                <RestaurantCard
                  key={restaurant._id}
                  id={restaurant._id}
                  imgUrl={restaurant.image}
                  title={restaurant.name}
                  rating={restaurant.rating}
                  reviews={restaurant.reviews}
                  type={restaurant.type?.name}
                  address={restaurant.address}
                  description={restaurant.description}
                  dishes={restaurant.dishes}
                  lng={restaurant.lng}
                  lat={restaurant.lat}

              />    
            )
          })
        }           
       </ScrollView>
    
    </View>
  )
}