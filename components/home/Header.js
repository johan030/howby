import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  
} from "react-native";
import React from "react";
import ProgressBar from "react-native-animated-progress";
//import  {ImageCarousel, Icon}  from "react-native-image-slider-banner";
//import { CheckBox } from "react-native-elements";

const Header = () => {
  return (
    <>
      <View>
        <Text>Retour</Text>
        <Text>Sentier des gorges du Verdon</Text>

        <View style={styles.wrapper}>
          <View style={styles.wrapper}>
            <Pressable style={styles.ButtonRed}>
              <Text style={{ color: "white" }}>Favori</Text>
            </Pressable>
            <Pressable style={styles.ButtonBlue}>
              <Text style={{ color: "white" }}>Partager</Text>
            </Pressable>
            <Pressable style={styles.ButtonBlue}>
              <Text style={{ color: "white" }}>Appeler</Text>
            </Pressable>
          </View>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/000000/download--v1.png",
              }}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1508181441164-3c8e9bd4575a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
          }}
        />
      </View>
      <View style={styles.wrapper}>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/30/000000/group.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.text}>
          Sortir <br />
          maintenant
        </Text>
        <Text style={styles.text}>Organiser</Text>

        <Image
          source={{ uri: "https://img.icons8.com/ios/50/000000/picture.png" }}
          style={styles.icon}
        />
      </View>
      <View>
        <View style={styles.dontknowhowtocallmyclass}>
          <Text style={{ color: "red" }}>équipement et services</Text>
          <Image
            source={{ uri: "https://img.icons8.com/ios/50/000000/book.png" }}
            style={styles.icon}
          />
        </View>
        <View style={styles.dontknowhowtocallmyclass}>
          <Text style={{ color: "lightgray" }}>
            Accès pour personnes à mobilité réduite
          </Text>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/000000/wheelchair.png",
            }}
            style={styles.icon}
          />
        </View>
        <View style={styles.dontknowhowtocallmyclass}>
          <Text style={{ color: "lightgray" }}>Animaux acceptés</Text>
          <Image
            source={{ uri: "https://img.icons8.com/ios/50/000000/dog--v1.png" }}
            style={styles.icon}
          />
        </View>
        <View style={styles.dontknowhowtocallmyclass}>
          <Text style={{ color: "red" }}>parking gratuit sur place</Text>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/30/000000/park-and-charge.png",
            }}
            style={styles.icon}
          />
        </View>
        <View style={styles.dontknowhowtocallmyclass}>
          <Text style={{ color: "black" }}>Français</Text>
          <Image
            source={{
              uri: "https://img.icons8.com/color/48/000000/france.png",
            }}
            style={styles.icon}
          />
        </View>
        <View style={styles.dontknowhowtocallmyclass}>
          <Text style={{ color: "black" }}>Anglais</Text>
          <Image
            source={{
              uri: "https://img.icons8.com/office/16/000000/great-britain.png",
            }}
            style={styles.icon}
          />
        </View>
        <TouchableOpacity>
          <Text style={{ marginTop: "10px" }}>En savoir plus </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={{marginTop: '20px',marginBottom: '10px',flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Ressenti sur Howby</Text>
          <Text>94% favorable</Text>
        </View>
        <ProgressBar
          progress={94}
          height={7}
          backgroundColor="#4a0072"
          animated={false}
        />
      </View>
      <View>
        <View style={styles.page2Wrapper}>
          <Text style={{ color: "red" }}>Le sentier des gorges propose</Text>
          <Image
            source={{ uri: "https://img.icons8.com/ios/50/000000/book.png" }}
            style={styles.icon}
          />
        </View>
      </View>
      <View>
        <Text style={{ fontSize: "25px" }}>DANS</Text>
        <Text style={styles.text}>
          le livre de réservation, les noms des clients sont rares. "Nous avons
          deux tables réservées pour midi, trois pour ce soir, consulte Paula.
          Disons que c'est rien pour une journée normale. On va dire que c'est
          une petite reprise
        </Text>
        <Text>En savoir plus</Text>
      </View>
      <View>
        <Text> Image slider vient ici</Text>
      </View>
      <View style={styles.emplacement}>
        <Text style={{ color: "red" }}>Emplacements</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/000000/place-marker--v1.png",
          }}
          style={styles.icon}
        />
      </View>
      <View>
        <Image
          source={{
            uri: "https://www.astuces-webmaster.ch/tutos/html5_css3/geoloc-html5-google-maps/geoloc-html5-google-maps.png",
          }}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={{ fontSize: "30px", marginTop: 20 }}>Les gorges</Text>
        <Text style={{ color: "#343638" }}>
          du Verdon sont un ensemble de gorges creusé par la rivière Verdon
          séparant les Préalpes de Castellane et les Préalpes de Digne, en
          France ...
        </Text>
        <TouchableOpacity>
          <Pressable>
            <Text>En savoir plus</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
      

      <View style={styles.hickinginfo}>
        <Text style={{ color: "red" }}>Type de parcours</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/material-outlined/24/000000/itinerary.png",
          }}
          style={styles.icon}
        />
      </View>
      <View style={styles.infos}>
          <Text>Distance du <br /> parcours</Text>
          <Text>Dénivelé</Text>
          <Text>Durée du <br /> parcours</Text>
      </View>
      <View style={styles.infos}>
          <Text style={styles.content}>1,2Km</Text>
          <Text style={styles.content}> + 350</Text>
          <Text style={styles.content}>1:30</Text>
      </View>

      <View style={styles.prices}>
      <Text style = {{color: 'red'}}>Tarifs</Text>
      <Image source= {{uri: 'https://img.icons8.com/material-two-tone/24/000000/euro-pound-exchange.png'}} style={styles.icon} />
    </View>

    <View style={styles.content}>
        <Text style={{marginBottom: '15px'}}>Tarif de bases</Text>
        <Text style={styles.text}>20 € de l'heure</Text>
        <Text  style={styles.text}>10 € par personnes</Text>
        <Text  style={styles.text}>20 € par personnes</Text>
    </View>
    <View style={styles.content}>
        <Text style={{marginBottom: '15px'}}>Plein tarifs</Text>
        <Text  style={styles.text}>20 € de l'heure</Text>
        <Text  style={styles.text}>10 € par personnes</Text>
        <Text  style={styles.text}>20 € par personnes</Text>
    </View>

    <View style={styles.myclass}>
        <Text style={{ color: "red" }}>Horaires</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/windows/32/000000/clock--v1.png",
          }}
          style={styles.icon}
        />
      </View>
      <View>
          <Text style={{marginBottom: '10px'}}>De juin à Septembre tous les jours de <br />
          06:00 à 20:00</Text>
          <Text>Périodes d'ouverture confirmées - déconfinement COVID19</Text>
      </View>


      <View style={styles.myclass}>
            <Text style={{ color: "red" }}>Classement</Text>
            <Image
                source={{
                    uri: "https://img.icons8.com/material-outlined/24/000000/star--v2.png",
                }}
                style={styles.icon}
            />
        </View>

        <View style={styles.myclass}>
            <Text style={{ color: "red" }}>Informations complémentaires</Text>
            <Image
                source={{
                    uri: "https://img.icons8.com/ios/50/000000/book.png",
                }}
                style={styles.icon}
            />
        </View>

        <View>
            <Text>Appartient à</Text>
            <Text>A comme clientèle cible</Text>
            <Text>Langue disponible</Text>
        </View>

        <View style={styles.myclass}>
        <Text style={{ color: "red" }}>Informations complémentaires</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/000000/book.png",
          }}
          style={styles.icon}
        />
      </View>
      <View>
        <Text>Mesure sanitaire du covid - 19</Text>
      </View>
      <View style={styles.signaler}>
        <Pressable style={{ paddingTop: "2rem" }}>
          <Text>Signaler cette annonce</Text>
        </Pressable>
      </View>


      <View>
      <Text>Dans le même thème à proximité</Text>
    </View>

    <View>
            <Pressable style={{marginBottom: '1rem'}}>
                <Text>Retour</Text>
            </Pressable>
            <Text style={styles.question}>Pourquoi signalez vous cette annonce ? </Text>
        </View>
        
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: "1rem",
    marginright: "1rem",
    marginTop: "1rem",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  ButtonRed: {
    backgroundColor: "red",
    color: "white", //fonctionne pas
    borderRadius: ".5rem",
    marginRight: "1rem",
    padding: "5px,10px,5px,10px",
  },
  ButtonBlue: {
    backgroundColor: "#000D4E",
    color: "#fff", // fonctionne pas?
    marginRight: "1rem",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: '-10px',
    resizeMode: "contain",
  },
  image: {
    marginTop: "1rem",
    width: "300px",
    height: "400px",
  },
  dontknowhowtocallmyclass: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "15px",
  },

  page2Wrapper: {
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    marginBottom: 20,
    marginTop: "50px",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  emplacement: {
    marginTop: "20px",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  hickinginfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    marginBottom: 20,
    marginTop: '10px'
  },
  infos:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '20px'
},
content:{
    padding: '.8rem',
    backgroundColor: '#FAF7F4',
    borderRadius: '10px',
    fontSize:  '1rem',
    letterSpacing: '2px'
},
prices: {
  marginTop: '20px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottomColor: 'gray',
  borderBottomWidth: 2,
  marginBottom: 20,
},

myclass: {
  marginTop: '20px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottomColor: 'gray',
  borderBottomWidth: 2,
  marginBottom: 20,
},

pressable:{    
marginTop: '10rem',
textAlign:'center',
borderColor: 'blue',
borderWidth: 2,
padding: '.5rem',
borderRadius: '10px'
},

question:{
fontSize: '1.5rem',
marginBottom: '2rem'
}

});

export default Header;
