import { Grid } from "@chakra-ui/react";
import { SingleEntityCard } from "./SingleEntityCard";
import { FilmsInfo } from "./FilmsInfo";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function PlanetsList({ planets }) {
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {planets.map((planet) => (
          <div key={planet.name}>
            <SingleEntityCard name={planet.name} />
            <Accordion allowToggle>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          backgroundColor="black"
                          opacity="70%"
                        >
                          RESIDENTS:
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      minHeight="50px"
                      pb={4}
                      backgroundColor="black"
                      opacity="70%"
                    >
                      {isExpanded &&
                        planet.residents.map((resident, index) => (
                          <FilmsInfo key={index} url={resident} />
                        ))}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </Grid>
    </>
  );
}
export { PlanetsList };
