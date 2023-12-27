import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Heading, Flex, Card, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

export const IssueDetail = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex gap="3" my={"2"}>
        <Text>{issue.createdAt.toDateString()}</Text>
        <p>
          <IssueStatusBadge status={issue.status} />
        </p>
      </Flex>
      <Card className="prose max-w-full" mt="4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};
