import { View, Text } from "react-native";
import React from "react";

import { FocusedStatusBar, HomeHeader } from "../components";
import { COLORS, SIZES } from "../constants";

const Reader = () => {
  return (
    <View>
      <FocusedStatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />
      <HomeHeader />
      <Text
        style={{
          marginTop: SIZES.medium,
          paddingBottom: SIZES.small,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        The fungi constitute a unique kingdom of heterotrophic organisms. They
        show a great diversity in morphology and habitat. You must have seen
        fungi on a moist bread and rotten fruits. The common mushroom you eat
        and toadstools are also fungi. White spots seen on mustard leaves are
        due to a parasitic fungus. Some unicellular fungi, e.g., yeast are used
        to make bread and beer. Other fungi cause diseases in plants and
        animals; wheatnrust-causing Puccinia is an important example. Some are
        the source of antibiotics, e.g., Penicillium. Fungi are cosmopolitan and
        occur in air, water, soil and on animals and plants. They prefer to grow
        in warm and humid places. Have you ever wondered why we keep food in the
        refrigerator ?{" "}
      </Text>
      <Text
        style={{
          marginTop: SIZES.medium,
          paddingBottom: SIZES.small,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        Yes, it is to prevent food from going bad due to bacterial or fungal
        infections. With the exception of yeasts which are unicellular, fungi
        are filamentous. Their bodies consist of long, slender thread-like
        structures called hyphae. The network of hyphae is known as mycelium.
        Some hyphae are continuous tubes filled with multinucleated cytoplasm –
        these are called coenocytic hyphae. Others have septae or cross walls in
        their hyphae. The cell walls of fungi are composed of chitin and
        polysaccharides.{" "}
      </Text>
      <Text
        style={{
          marginTop: SIZES.medium,
          paddingBottom: SIZES.small,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        Most fungi are heterotrophic and absorb soluble organic matter from dead
        substrates and hence are called saprophytes. Those that depend on living
        plants and animals are called parasites. They can also live as symbionts
        – in association with algae as lichens and with roots of higher plants
        as mycorrhiza. Reproduction in fungi can take place by vegetative means
        – fragmentation, fission and budding. Asexual reproduction is by spores
        called conidia or sporangiospores or zoospores, and sexual reproduction
        is by oospores, ascospores and basidiospores.{" "}
      </Text>
      <Text
        style={{
          marginTop: SIZES.medium,
          paddingBottom: SIZES.small,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        The various spores are produced in distinct structures called fruiting
        bodies. The sexual cycle involves the following three steps: (i) Fusion
        of protoplasms between two motile or non-motile gametes called
        plasmogamy. (ii) Fusion of two nuclei called karyogamy. (iii) Meiosis in
        zygote resulting in haploid spores. When a fungus reproduces sexually,
        two haploid hyphae of compatible mating types come together and fuse. In
        some fungi the fusion of two haploid cells immediately results in
        diploid cells (2n). However, in other fungi (ascomycetes and
        basidiomycetes), an intervening dikaryotic stage (n + n, i.e., two
        nuclei per cell) occurs; such a condition is called a dikaryon and the
        phase is called dikaryophase of fungus. Later, the parental nuclei fuse
        and the cells become diploid. The fungi form fruiting bodies in which
        reduction division occurs, leading to formation of haploid spores.{" "}
      </Text>
      <Text
        style={{
          marginTop: SIZES.medium,
          paddingBottom: SIZES.small,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        The morphology of the mycelium, mode of spore formation and fruiting
        bodies form the basis for the division of the kingdom into various
        classes.
      </Text>
    </View>
  );
};

export default Reader;
