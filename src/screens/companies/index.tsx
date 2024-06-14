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
import { CompanyCard } from "./companiesCard";
import { Responsiveness } from "../../utils/styles/SizeResponsiveness";
import { Filter } from "./filter";
import { CreateCompany } from "./createCompany";
import { DataTable as PaperDataTable} from "react-native-paper";
import { usePagination } from "../../hooks/usePagination";
import { useCompaniesContext } from "../../context/CompaniesContext";
import { useCompaniesFilterContext } from "../../context/CompaniesFilterContext";



export function Companies() {
  const { companies, loading, setVisible, fetchAllCompanies} = useCompaniesContext();
  const { setVisible:setFilterVisible, isFiltred } = useCompaniesFilterContext();
  const {
    page,
    setPage,
    getIndicators,
    numberOfItemsPerPageList,
    numberOfItemsPerPage,
    handleOnItemsPerPageChange,
    handlePaginate
    
  } = usePagination();

  const { numberOfPages, label } = getIndicators(companies)

  const companiesFiltred = handlePaginate({items:companies,page,itemsPerPage:numberOfItemsPerPage});

  useFocusEffect(
    useCallback(() => {
      fetchAllCompanies();
    }, [])
  );

  return (
    <Container>

      <CreateCompany />

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
            Buscando empresas, aguarde...
          </Title>
        </OverLay>
        :
        <>
          <FlatList
            scrollEnabled={true}
            data={companiesFiltred}
            keyExtractor={(item) => `${item.id}`}
            initialNumToRender={4}
            contentContainerStyle={{
              gap: Responsiveness(1),
              paddingBottom:10
              
            }}
            renderItem={({ item }) => (
           
              <CompanyCard company={item} />
             
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
