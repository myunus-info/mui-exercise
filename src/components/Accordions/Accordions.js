import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const Accordions = () => {
  const [expanded, setExpanded] = useState('pnel1');
  const handleChange = panel => (_, newExpanded) => setExpanded(newExpanded ? panel : false);

  return (
    <Box>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary>
          <Typography>Lorem ipsum dolor sit amet. #01</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio natus fugiat repudiandae qui
            atque quibusdam quia eveniet culpa. Expedita, minus impedit et ratione doloremque maiores
            officiis magnam perspiciatis provident. In hic, veritatis laboriosam, voluptatibus nostrum
            laudantium eum quis adipisci sunt quisquam eius ratione vel blanditiis officia aliquid dicta
            minus non.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary>
          <Typography>Lorem ipsum dolor sit amet. #02</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio natus fugiat repudiandae qui
            atque quibusdam quia eveniet culpa. Expedita, minus impedit et ratione doloremque maiores
            officiis magnam perspiciatis provident. In hic, veritatis laboriosam, voluptatibus nostrum
            laudantium eum quis adipisci sunt quisquam eius ratione vel blanditiis officia aliquid dicta
            minus non.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary>
          <Typography>Lorem ipsum dolor sit amet. #03</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio natus fugiat repudiandae qui
            atque quibusdam quia eveniet culpa. Expedita, minus impedit et ratione doloremque maiores
            officiis magnam perspiciatis provident. In hic, veritatis laboriosam, voluptatibus nostrum
            laudantium eum quis adipisci sunt quisquam eius ratione vel blanditiis officia aliquid dicta
            minus non.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Accordions;
