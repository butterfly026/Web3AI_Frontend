import {
  Flex,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Alert,
  Link,
  AlertIcon,
} from "@chakra-ui/react";

import { useMyIntl } from "../../../common";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

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
  const { lang } = useMyIntl("CoinbaseSecurityPrompt");
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
          <Flex
            flexDir="column"
            flex="1"
            sx={{
              padding: {
                base: "0 0.2rem",
                sm: "0 0.2rem",
                md: "0 2rem 0 0",
                lg: "0 2rem 0 0",
              },
            }}
          >
            <Flex>
              <Breadcrumb color="#708599" fontSize="13px">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/home/help">{lang[0]}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/home/help/getting-started">
                    {lang[1]}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink>{lang[2]}</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              fontSize="var(--cds-sizes-10)"
              py={3}
            >
              {lang[3]}
            </Text>
            <Alert
              status="info"
             sx={{ background: "#f2f2f2", _dark: { background: "#333" } }}
              py={6}
              borderRadius="10px"  border="1px solid #5b616e33"
            >
              {" "}
              <Flex>
                {" "}
                <AlertIcon boxSize="var(--cds-sizes-6)" color="#1652f0" />
                <Text pl={3}>
                  <Text fontSize="1rem">{lang[4]}</Text>
                </Text>
              </Flex>
            </Alert>
            <Text fontSize="1rem" pt={6}>
              {lang[5]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[6]}
            </Text>

            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                {lang[7]}
                <Link color="#1652f0" href="#">
                  {lang[8]}
                </Link>
                {lang[9]}
                <Text as="b">{lang[10]}</Text>
              </Text>
              <Text as="li" display="list-item">
                {lang[11]}
                <Text as="b">{lang[12]}</Text>
                {lang[13]}
                <Text as="b">{lang[14]}</Text>
                {lang[15]}
              </Text>
            </Text>

            <Text fontSize="1rem" pt={6}>
              {lang[16]}
              <Text as="b">{lang[17]}</Text>
              {lang[18]}
              <Text as="b">{lang[19]}</Text>
              {lang[20]}
              <Text as="b">{lang[21]}</Text>
              {lang[22]}
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[23]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[24]}
              <Text as="b">{lang[25]}</Text>
              {lang[26]}
            </Text>

            <Text fontSize="1rem" pt={6}>
              {lang[27]}
              <Text as="b">{lang[28]}</Text>
              {lang[29]}
              <Text as="b">{lang[30]}</Text>.
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[31]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[32]}
              <Link color="#1652f0" href="#">
                {lang[33]}
              </Link>
              {lang[34]}
              <Text as="b">{lang[35]}</Text>
            </Text>
            <Text
              fontWeight="var(--cds-fontWeights-medium)"
              pt={12}
              pb={4}
              fontSize="1.25rem"
              id="#"
            >
              {lang[36]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[37]}
              <Text as="b">{lang[38]}</Text>
              {lang[39]}
            </Text>

            <Text fontSize="1rem" pt={6}>
              {lang[40]}
            </Text>

            <Text
              as="ul"
              listStyleType="disc"
              fontSize="1rem"
              pt={6}
              pl={6}
              pb="4"
            >
              <Text as="li" display="list-item">
                {lang[41]}
              </Text>
              <Text as="li" display="list-item">
                {lang[42]}
                <Link color="#1652f0" href="#">
                  {lang[43]}
                </Link>
                {lang[44]}
                <Link color="#1652f0" href="#">
                  {lang[45]}
                </Link>
                .
              </Text>
              <Text as="li" display="list-item">
                {lang[46]}
              </Text>
              <Text as="ul" fontSize="1rem" pt={6} pl={6} pb="4">
                <Text as="li" display="list-item">
                  {lang[47]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[48]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[49]}
                </Text>
                <Text as="li" display="list-item">
                  {lang[50]}
                </Text>
              </Text>
              <Text as="li" display="list-item">
                {lang[51]}
                <Link color="#1652f0" href="#">
                  {lang[52]}
                </Link>
                {lang[53]}
                <Link color="#1652f0" href="#">
                  {lang[54]}
                </Link>
                .)
              </Text>
              <Text as="li" display="list-item">
                {lang[55]}
              </Text>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[56]}
              <Link color="#1652f0" href="#">
                {lang[57]}
              </Link>
              {lang[58]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[59]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[60]}
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[61]}
              <Text as="b">{lang[62]}</Text>
              {lang[63]}
              <Link color="#1652f0" href="#">
                {lang[64]}
              </Link>
            </Text>
            <Text fontSize="1rem" pt={6}>
              {lang[65]}
              <Link color="#1652f0" href="#">
                {lang[66]}
              </Link>
              {lang[67]}
              <Link color="#1652f0" href="#">
                {lang[68]}
              </Link>
              .
            </Text>
          </Flex>
          <Flex
            w={{ base: "100%", sm: "100%", md: "33%", lg: "33%" }}
            px={{ base: 5, sm: 5, md: 0, lg: 0 }}
            mt={{ base: 5, sm: 5, md: 0, lg: 0 }}
            display="block"
          ></Flex>
        </Flex>
      </Flex>
      <PageHelpful />
      <GettingFooter />
    </Flex>
  );
};
