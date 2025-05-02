import { Text, View } from "@gluestack-ui/themed";

import { Navbar } from "@components/NavBar";
import { Scrollable } from "@components/Scrollable";
import { SearchBar } from "@components/SearchBar";
import { HomeHeader } from "@components/HomeHeader";
import { ListedProducts } from "@components/ListedProducts";
import { ListingPreview } from "@components/ProductPreview/ListingPreview";
import { ActionSheetFilters } from "@components/ActionSheetFilters";

import { SheetFiltersContext } from "@contexts/SheetFiltersContext";

export function Home() {
  {/* TODO: Modify here after I start to receive data from the API */}
  const listingData = [
    { component: ListingPreview, props: { imageUri: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg", avatarShow: true, conditionBadge: true, title: "Tênis Vermelho", price: " 59,90", activated: true } },
    { component: ListingPreview, props: { imageUri: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg", avatarShow: true, conditionBadge: true, title: "Tênis Vermelho", price: " 59,90", activated: true } },
    { component: ListingPreview, props: { imageUri: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg", avatarShow: true, conditionBadge: true, title: "Tênis Vermelho", price: " 59,90", activated: true } },
    { component: ListingPreview, props: { imageUri: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg", avatarShow: true, conditionBadge: true, title: "Tênis Vermelho", price: " 59,90", activated: true } },
    { component: ListingPreview, props: { imageUri: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg", avatarShow: true, conditionBadge: true, title: "Tênis Vermelho", price: " 59,90", activated: true } },
    { component: ListingPreview, props: { imageUri: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg", avatarShow: true, conditionBadge: true, title: "Tênis Vermelho", price: " 59,90", activated: true } },
  ];

  return (
    <SheetFiltersContext>
      <View flex={1} paddingVertical={30}>
        <HomeHeader />
        <ListedProducts />

        <View marginHorizontal={30} marginTop={35}>
          <Text mb={15}>Compre produtos variados</Text>
          <SearchBar />
        </View>

        <View mt={25} marginHorizontal={30} flex={1}>
          <Scrollable data={listingData} />
        </View>

        <Navbar />

        <ActionSheetFilters />
      </View>
    </SheetFiltersContext>
  );
}