import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useMyIntl } from "../../../common";
import GettingFooter from "./components/GettingFooter";
import PageHelpful from "./components/PageHelpful";

const styles = {
  helpSearchC: {
    width: "100%",
    minHeight: "calc(100vh - 68px - 64px)",
    display: "block",
  },
  headSearch: {
    border: "1px solid #5b636ea8",
    height: "60px",
    alignItems: "center",
    margin: "24px 0",
    borderRadius: "50px",
  },
  headIcon: {
    padding: "0 1.6rem",
  },
  headClone: {
    padding: "0 1.3rem",
  },
  gettingList: {
    padding: "2rem 0 1rem 0",
  },
  ListItems: {
    lineHeight: "2rem",
    "&:hover": {
      color: "#1652f0",
      textDecoration: "underline",
    },
  },
  GettingRightFixed: {
    borderLeft: "1px solid #98989829",
    fontSize: "14px",
    position: "fixed",
    top: "100px",
  },
  GettingRightRel: {
    borderLeft: "1px solid #98989829",
    fontSize: "14px",
    position: "relative",
    top: "0",
  },
  footers: {
    backgroundColor: "#90909024",
    padding: "6rem 0",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "2rem",
  },
  CellLink: {
    color: "#050f19",
    borderLeft: "4px solid #fff",
    padding: "0.35rem 0 0.35rem 1rem",
  },
  RAcives: {
    borderLeft: "4px solid #1652f0",
    color: "#1652f0",
    padding: "0.35rem 0 0.35rem 1rem",
  },
};
export default () => {
  const [getFixed, setFixed] = useState<any>(styles.GettingRightRel);
  const onScroll = (e: any) => {
    if (document.body.clientWidth > 768) {
      if (e.target.documentElement.scrollTop > 100) {
        setFixed(styles.GettingRightFixed);
      } else {
        setFixed(styles.GettingRightRel);
      }
    }
  };
  const resizeUpdate = (e: any) => {
    if (document.body.clientWidth < 768) {
      setFixed(styles.GettingRightRel);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", resizeUpdate);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("resize", resizeUpdate);
    };
  });
  const { lang } = useMyIntl("Passwordrequirementsandtroubleshooting");
  return (
      <Flex sx={styles.helpSearchC}>
        <Flex w="100%" flexDir="column" margin="0 auto" px={5}>
          <Flex sx={styles.headSearch}>
            <Flex sx={styles.headIcon}>
              <SearchIcon />
            </Flex>
            <Flex flex="1" pr={4}>
              <Input variant="unstyled" placeholder="How can we help you?" />
            </Flex>
            <Flex sx={styles.headClone}>
              <SmallCloseIcon boxSize={6} />
            </Flex>
          </Flex>
          <Flex pt={10} flexWrap="wrap">
            <Flex flexDir="column" flex="1" sx={{padding: {base: "0 0.2rem", sm: "0 0.2rem", md: "0 2rem 0 0", lg: "0 2rem 0 0",},}}>
              <Flex>
                <Breadcrumb color="#708599" fontSize="13px">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/home/help">
                      {lang[0]}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/home/help/Privacy-and-security">
                      {lang[1]}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink>
                      {lang[2]}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
              </Flex>
              <Text fontWeight="var(--cds-fontWeights-medium)" fontSize="var(--cds-sizes-10)" py={3}>
                {lang[3]}
              </Text>
              <Alert status="info" sx={{ background: "#f2f2f2", _dark: { background: "#333" } }} py={6} borderRadius="10px"  border="1px solid #5b616e33">{" "}<Flex>{" "}<AlertIcon boxSize="var(--cds-sizes-6)" color="#1652f0" /><Text pl={3}><Text as="b">
                {lang[4]}
              </Text>
                <Text fontSize="1rem" pt={6}>
                  {lang[5]}
                </Text>
              </Text>
              </Flex>
              </Alert>
              <Text fontWeight="var(--cds-fontWeights-medium)" pt={12} pb={4} fontSize="1.75rem" letterSpacing="-0.08rem" id="#">
                {lang[6]}
              </Text>
              <Text fontWeight="var(--cds-fontWeights-medium)" pt={12} pb={4} fontSize="1.25rem" id="#">
                {lang[7]}
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pt={6} pl={6} pb="4">
                <Text as="li" display="list-item">
                  {lang[8]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[9]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[10]}
                </Text>
              </Text>
              <Text fontWeight="var(--cds-fontWeights-medium)" pt={12} pb={4} fontSize="1.25rem" id="#">
                {lang[11]}
              </Text>

              <Text fontSize="1rem" pt={6}>
                {lang[12]}
              </Text>
              <Text fontSize="1rem" pt={6}>
                {lang[13]}
              </Text>
              <Text as="ul" listStyleType="disc" fontSize="1rem" pt={6} pl={6} pb="4">
                <Text as="li" display="list-item">
                  {lang[14]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[15]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[16]}
                </Text>
              </Text>
              <Text fontWeight="var(--cds-fontWeights-medium)" pt={12} pb={4} fontSize="1.25rem" id="#">
                {lang[17]}
              </Text>

              <Text fontSize="1rem" pt={6}>
                {lang[18]}
              </Text>

              <Text fontSize="1rem" pt={6}>
                {lang[19]}
                <Link color="#1652f0" href="#">
                  {lang[20]}
                </Link>{" "}
                {lang[21]}
              </Text>
              <Text fontWeight="var(--cds-fontWeights-medium)" pt={12} pb={4} fontSize="1.75rem" letterSpacing="-0.08rem" id="#">
                {lang[22]}
              </Text>
              <Text fontWeight="var(--cds-fontWeights-medium)" pt={12} pb={4} fontSize="1.25rem" id="#">
                {lang[23]}
              </Text>
              <Text fontSize="1rem" pt={6}>
                {lang[24]}
              </Text>
              <Text as="ul" listStyleType="decimal" fontSize="1rem" pt={6} pl={6} pb="4">
                <Text as="li" display="list-item">
                  {lang[25]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[26]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[28]}
                  {lang[28]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[29]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[30]}
                </Text>
              </Text>
              <Text fontSize="1rem" pt={6}>
                {lang[31]}
                <Link color="#1652f0" href="#">
                  {lang[32]}
                </Link>
              </Text>
              <Text fontWeight="var(--cds-fontWeights-medium)" pt={12} pb={4} fontSize="1.25rem" id="#">
                {lang[33]}
              </Text>
              <Text fontSize="1rem" pt={6}>
                {lang[34]}
              </Text>
              <Text fontSize="1rem" pt={6}>
                {lang[35]}
              </Text>
              <Text fontSize="1rem" pt={6}>
                {lang[36]}
              </Text>
              <Text as="ul" listStyleType="decimal" fontSize="1rem" pt={6} pl={6} pb="4">
                <Text as="li" display="list-item">
                  {lang[37]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[38]}
                </Text>
              </Text>
              <Text fontSize="1rem" pt={6}>
                {lang[39]}
                <Link color="#1652f0" href="#">
                  {lang[40]}
                </Link>
                {lang[41]}
              </Text>
              <Text fontWeight="var(--cds-fontWeights-medium)" pt={12} pb={4} fontSize="1.25rem" id="#">
                {lang[42]}
              </Text>
              <Text fontSize="1rem" pt={6}>
                {lang[43]}
              </Text>
            </Flex>
            <Flex w={{ base: "100%", sm: "100%", md: "33%", lg: "33%" }} px={{ base: 5, sm: 5, md: 0, lg: 0 }} mt={{ base: 5, sm: 5, md: 0, lg: 0 }} display="block"></Flex>
          </Flex>
        </Flex>
        <PageHelpful />
        <GettingFooter />
      </Flex>
  );
};
