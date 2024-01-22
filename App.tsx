/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {/* <Header /> */}
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Image source={require('./assets/logo.png')} />
        <View>
          <Section title="Coming soon: Apps for Vision Pro">
            On <Text style={styles.highlight}>Gurudevelopers</Text> we are
            always looking for new challenges. That is why we anticipate future
            trends and technologies.
          </Section>
          <Section title="Give your users the best experience">
            Embrace the future of app development using spatial computing.
            Provide out of this world experiences to your users.
          </Section>
          {/* <Section title="Debug">
            <DebugInstructions />
          </Section> */}
          <Section title="Learn More">
            Discover more on gurudevelopers.dev
          </Section>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
