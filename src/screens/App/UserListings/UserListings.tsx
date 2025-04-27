import { useState } from "react";

import { Text, View } from "@gluestack-ui/themed";

import { Navbar } from "@components/NavBar";
import { ScreenHeaders } from "@components/ScreenHeaders";
import { DropdownSelect } from "@components/DropdownSelect";
import { Scrollable } from "@components/Scrollable";
import { ListingPreview } from "@components/ProductPreview/ListingPreview";

import { Plus } from "lucide-react-native";

export function UserListings() {
  {/* TODO: Modify here after I start to receive data from the API */ }
  const listingData = [
    { component: ListingPreview, props: { imageUri: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg', avatarShow: false, conditionBadge: true, title: "Perfume Jequiti", price: " 99,90", activated: true } },
    { component: ListingPreview, props: { imageUri: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg', avatarShow: false, conditionBadge: true, title: "Perfume Jequiti", price: " 99,90", activated: true } },
    { component: ListingPreview, props: { imageUri: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg', avatarShow: false, conditionBadge: true, title: "Perfume Jequiti", price: " 99,90", activated: true } },
    { component: ListingPreview, props: { imageUri: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg', avatarShow: false, conditionBadge: true, title: "Perfume Jequiti", price: " 99,90", activated: false } },
    { component: ListingPreview, props: { imageUri: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg', avatarShow: false, conditionBadge: true, title: "Perfume Jequiti", price: " 99,90", activated: false } }
  ];

  const [listingQuantity, setListingQuantity] = useState(listingData.length);

  return (
    <View flex={1}>
      <ScreenHeaders comeback={false} headerTitle="Meus anúncios" actionButton={Plus} />

      <View m={25} flexDirection="row" justifyContent="space-between" alignItems="center">
        <Text w="40%">{ listingQuantity } anúncios</Text>
        <DropdownSelect style={{ width: "50%" }} />
      </View>

      <View mt={25} marginHorizontal={30} flex={1}>
        <Scrollable data={listingData} />
      </View>

      <Navbar />
    </View>
  )
}