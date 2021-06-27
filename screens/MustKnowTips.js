import React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import tailwind from 'tailwind-rn';
import Button from "../components/Button";

const MustKnowTips = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container} >
        <ScrollView contentContainerStyle={tailwind("flex flex-col px-3 items-center justify-center")}>

        <View>
          <Text style={styles.header1}>
            10 Useful things you need to know before coming into Singapore
          </Text>
        </View>

        <View>
          <Text style={styles.header2}>1. Taxis in Singapore are metered and regulated</Text>
        </View>
        
        <View>
          <Image style={styles.image} source={require('../assets/singapore/taxi.jpg')} />
        </View>

        <View>
          <Text style={styles.body}>
            In Singapore taxis are regulated and distances are fairly calculated through the meter. 
            In fact, with the introduction of cheaper services like Grab and Uber in Singapore, 
            hailing a taxi is no longer a painstaking process as locals generally avoid them due 
            to the high price.
          </Text>
        </View>

        <View>
          <Text style={styles.header2}>2. See seats with packets of tissues? They're reserved</Text>
        </View>

        <View>
          <Image style={styles.image} source={require('../assets/singapore/tissue.jpg')} />
        </View>

        <View>
          <Text style={styles.body}>
          An unspoken rule that many abide, it is a common sight to see people forming a single line 
          on the left side of the escalator. You might be scratching your head if you are seeing this 
          for the first time, but this orderly behaviour is part of an old campaign in Singapore to 
          help promote the act of courtesy.
          </Text>
        </View>

        <View>
          <Text style={styles.header2}>3. Going up the escalator? Keep to the left</Text>
        </View>

        <View>
          <Image style={styles.image} source={require('../assets/singapore/escalator.jpg')} />
        </View>

        <View>
          <Text style={styles.body}>
          An unspoken rule that many abide, it is a common sight to see people forming a single line 
          on the left side of the escalator. You might be scratching your head if you are seeing this 
          for the first time, but this orderly behaviour is part of an old campaign in Singapore to 
          help promote the act of courtesy.
          </Text>
        </View>

        <View>
          <Text style={styles.header2}>4. Singapore’s train network gets you virtually anywhere</Text>
        </View>

        <View>
          <Image style={styles.image} source={require('../assets/singapore/mrt.jpg')} />
        </View>

        <View>
          <Text style={styles.body}>
          Due to the small size of the city, getting from one point to another in Singapore is not 
          time-consuming. Major landmarks are also well-connected through a comprehensive train network, 
          which gets you from suburban parts of Singapore to the heart of the city under 30 minutes. 
          Read up on how to navigate transport in Singapore.
          </Text>
        </View>

        <View>
          <Text style={styles.header2}>5. Singapore is not a tipping country</Text>
        </View>

        <View>
          <Image style={styles.image} source={require('../assets/singapore/tip.jpg')} />
        </View>

        <View>
          <Text style={styles.body}>
          Unlike many western countries, it is not compulsory for diners to tip service staff in Singapore. 
          This is because most restaurants or cafes will impose a 10% service charge on top of your final bill. 
          Does that count as an indirect tip? Maybe, but individual staff usually do not receive a cut from it. 
          That said, the act of tipping itself isn’t illegal, and you can still make someone’s day with a tip 
          should you feel like it!
          </Text>
        </View>

        <View>
          <Text style={styles.header2}>6. Watch out for priority seats on the public transports</Text>
        </View>

        <View>
          <Image style={styles.image} source={require('../assets/singapore/reservedSeat.jpg')} />
        </View>

        <View>
          <Text style={styles.body}>
          All trains and buses in Singapore include reserved seating allocated for pregnant women, 
          the elderly and physically handicapped. They are mostly located at the two corners in a 
          row of seats (as it is closer to the exit) and the front of the bus. These seats aren’t 
          only for specific groups of people – passengers are encouraged to give up their seat to 
          anyone who needs it more.
          </Text>
        </View>

        <View>
          <Text style={styles.header2}>7. You cannot buy alcohol or drink in public after 10.30 pm</Text>
        </View>

        <View>
          <Image style={styles.image} source={require('../assets/singapore/alcohol.jpg')} />
        </View>

        <View>
          <Text style={styles.body}>
          If you’ve ever romanticised about enjoying the enchanting views of Singapore’s skyline at night 
          with a beer in hand, do it in a licensed bar or risk getting a fine! Since the infamous riot that 
          took place on Race Course Road in 2013, local authorities have banned the purchase and consumption 
          of alcohol in public between 10. 30 pm and seven am. 
          </Text>
        </View>

        <View>
          <Text style={styles.header2}>8. Smoking is only allowed in designated areas</Text>
        </View>

        <View>
          <Image style={styles.image} source={require('../assets/singapore/smoking.jpg')} />
        </View>

        <View>
          <Text style={styles.body}>
          Smoking in Singapore isn’t illegal, but there are strict regulations in place. For example, 
          you cannot smoke indoors, at public bus stops or even under sheltered walkways. There are 
          designated smoking points in most areas, but if you are new to the area they might require 
          some hunting. So what happens if you are caught? You can be fined as much as $1,000 if you 
          are convicted in court!
          </Text>
        </View>

        <View>
          <Text style={styles.header2}>9. Never go hungry with 24 hour restaurants</Text>
        </View>

        <View>
          <Image style={styles.image} source={require('../assets/singapore/food.jpg')} />
        </View>

        <View>
          <Text style={styles.body}>
          It’s a known fact that Singaporeans are passionate about their food. Which is why 
          you can find countless places in Singapore that stay open all day and night to feed 
          the city that never sleeps! Whether you are in the mood for some comforting dim sum, 
          hearty Indian curry or some chilli crab, your destination for some midnight grub is 
          just around the corner.
          </Text>
        </View>

        <View>
          <Text style={styles.header2}>10. Local coffees have more than 10 variations</Text>
        </View>

        <View>
          <Image style={styles.image} source={require('../assets/singapore/coffee.jpg')} />
        </View>

        <View>
          <Text style={styles.body}>
          Ordering a coffee in Singapore is an artform – the traditional local brew consists of black 
          brewed coffee, condensed milk and evaporated milk. Over the years, locals have been 
          customising their own morning cuppas, introducing new names like “Kopi-O” (black coffee), 
          “Kopi-C” (black coffee with evaporated milk), “Kopi Gao” (thicker coffee) and “Kopi Siew-dai” 
          (a less sweet variant of the regular coffee). While the list of names goes on, take comfort 
          in the fact that a cup of aromatic and robust coffee is only a coffee shop away.
          </Text>
        </View>


        <Button onPress={() => navigation.goBack()} text="Back" backgroundColor="#FE904B" textColor="#FFF" height="12" />
        <View style={tailwind("h-12")} />
        </ScrollView>
    </SafeAreaView>
  )
}


export default MustKnowTips;

function padding(a, b, c, d) {
    return {
      paddingTop: a,
      paddingRight: b ? b : a,
      paddingBottom: c ? c : a,
      paddingLeft: d ? d : (b ? b : a)
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  
  body:{
    ...padding(20, 0, 0, 0), 
    color: "black", 
    fontSize: 16,
  },
  
  header1:{
    ...padding(20, 0, 30, 30),
    color: "black", 
    fontSize: 26,
    fontWeight: 'bold',
  },

  header2: {
    ...padding(0, 0, 20, 0), 
    color: "black", 
    fontWeight: 'bold',
    fontSize: 16,
  },

  image: {
      ...padding(0, 0, 20, 0), 
      height: 180,
      width: 360,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  }
})