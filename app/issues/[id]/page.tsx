import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import ReactMarkdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap={"5"}>
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex gap="3" my={"2"}>
          <Text>{issue.createdAt.toDateString()}</Text>
          <p>
            <IssueStatusBadge status={issue.status} />
          </p>
        </Flex>
        <Card className="prose" mt="4">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`issues/${issue.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
