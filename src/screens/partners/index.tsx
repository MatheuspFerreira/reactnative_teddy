import { useCallback } from "react";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { Loading } from "../../components/loading";
import {
  Container,
  PlusCircleIcon,
  FilterIcon,
  Title,
  FilterButton,
  PlusCircleButton,
  OverLay,
  DataTable,
} from "./styled";
import { usePartnersContext } from "../../context/PartnersContext";
import { PartnerCard } from "./partnersCard";
import { Responsiveness } from "../../utils/styles/SizeResponsiveness";
import { Filter } from "./filter";
import { usePartnerFilterContext } from "../../context/FilterContext";
import { CreatePartner } from "./createPartner";
import { DataTable as PaperDataTable} from "react-native-paper";
import { usePagination } from "../../hooks/usePagination";



export function Partners() {
  const { partners, loading, setVisible, fetchAllPartners } = usePartnersContext();
  const { setVisible:setFilterVisible, isFiltred } = usePartnerFilterContext();
  const {
    page,
    setPage,
    numberOfPages,
    label,
    numberOfItemsPerPageList,
    numberOfItemsPerPage,
    handleOnItemsPerPageChange,
    handlePaginate
    
  } = usePagination();

  const partnersFiltred = handlePaginate({items:partners,page,itemsPerPage:numberOfItemsPerPage});

  useFocusEffect(
    useCallback(() => {
      fetchAllPartners();
    }, [])
  );

  return (
    <Container>

      <CreatePartner />

      <Filter />
      
      <FilterButton
        onPress={() =>setFilterVisible(true)}
        disabled={loading}
      >
        <FilterIcon name={ isFiltred ? "filter" : "filter-off"} />

      </FilterButton>

      <PlusCircleButton
        onPress={() => setVisible(true)}
        disabled={loading}
      >
        <PlusCircleIcon name="pluscircle" />
      </PlusCircleButton>

      {
        loading 
        ?
        <OverLay>
          <Loading size={44} />
          <Title style={{ textAlign: "center" }}>
            Buscando parceiros, aguarde...
          </Title>
        </OverLay>
        :
        <>
          <FlatList
            scrollEnabled={true}
            data={partnersFiltred}
            keyExtractor={(item) => `${item.id}`}
            initialNumToRender={4}
            contentContainerStyle={{
              gap: Responsiveness(1),
              paddingBottom:10
              
            }}
            renderItem={({ item }) => (
           
              <PartnerCard partner={item} />
             
            )}
          />

          <DataTable>
            <PaperDataTable.Pagination
              page={page}
              numberOfPages={numberOfPages}
              onPageChange={page => setPage(page)}
              label={label}
              numberOfItemsPerPageList={numberOfItemsPerPageList}
              numberOfItemsPerPage={numberOfItemsPerPage}
              onItemsPerPageChange={handleOnItemsPerPageChange}
              selectPageDropdownLabel={"Itens"}
            />
          </DataTable>
        </>
      }

      <Toast />
    </Container>
  );
}
