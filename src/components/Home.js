 import React from 'react'
 import RaisedButton from 'material-ui/RaisedButton'
 import Person from 'material-ui/svg-icons/social/person-outline'
 import Assignment from 'material-ui/svg-icons/action/assignment'

 const styles = {
   button: {
     margin: 12,
   },
   exampleImageInput: {
     cursor: 'pointer',
     position: 'absolute',
     top: 0,
     bottom: 0,
     right: 0,
     left: 0,
     width: '100%',
     opacity: 0,
   },
 };

 const Home = () => {
      return(
        <div>
          <p>Ugh eu palo santo VHS viral kogi, lumbersexual roof party fam tattooed esse 90's shabby chic dolor. Ea man bun waistcoat, williamsburg meh in enamel pin you probably haven't heard of them vexillologist ex kinfolk stumptown excepteur vice. Mustache cold-pressed chia quis sustainable snackwave kickstarter banjo keffiyeh narwhal. Brooklyn DIY street art church-key, do semiotics art party tilde. Shoreditch aliqua messenger bag bitters next level. Drinking vinegar blue bottle austin, shaman nisi subway tile wayfarers live-edge flexitarian glossier tousled tofu. DIY subway tile commodo kale chips elit keytar cronut food truck taiyaki chillwave cardigan four dollar toast. Post-ironic pour-over DIY mustache commodo brunch listicle. Tbh unicorn twee typewriter, green juice incididunt exercitation cold-pressed consequat magna. Pariatur pinterest migas 8-bit four dollar toast, officia irony vinyl hexagon brooklyn slow-carb shoreditch. Pork belly prism umami etsy single-origin coffee, meggings plaid lo-fi. Selvage proident aliquip microdosing paleo iceland, church-key pork belly kombucha organic eiusmod 8-bit hell of roof party excepteur. Iceland et chia shabby chic, synth narwhal taiyaki esse poutine pinterest stumptown.</p>
          <RaisedButton
              label="Login"
              labelPosition="after"
              secondary={true}
              icon={<Person />}
              style={styles.button}
            />
            <RaisedButton
                label="Register"
                labelPosition="after"
                secondary={true}
                icon={<Assignment />}
                style={styles.button}
              />
        </div>
     )
    }

  export default Home
