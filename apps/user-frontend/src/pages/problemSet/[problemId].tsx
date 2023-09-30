import axios from "axios";
import { useEffect, useState } from "react";
import { Typography, } from "@mui/material";
import { IProblem, exampleArr } from 'types/src';
import CodingArena from "../../../components/CodingArena";
import { useRouter } from "next/router";
import { trpc } from "@/utils/trpc";
/**
 * 
 * Sample response of /problemset/id->[
    {
        "_id": "64bff4d02e0034b5e491263e",
        "title": "Product of Array Except Self",
        "description": "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].\nThe product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.\nYou must write an algorithm that runs in O(n) time and without using the division operation.",
        "examples": "[{\"example1\":{\"input\":\"nums = [1,2,3,4]\",\"output\":\"[24,12,8,6]\"}},{\"example2\":{\"input\":\"nums = [1,2,3,4]\",\"output\":\"[24,12,8,6]\"}}]",
        "acceptance": "65.1%",
        "difficulty": "Medium",
        "__v": 0
    }
]
 */
export default function Problem() {
    const initialProblemState: IProblem = {
        // Initialize with default values as needed
        _id: "",
        title: "",
        description: "",
        examples: "", // Initialize examples with an empty array
        acceptance: "",
        difficulty: "",
    };
    const router = useRouter();

    const problemId = router.query.problemId as string;
    const { data } = trpc.byId.useQuery({ id: problemId });
    const problem = data?.problem || {}; // Use an empty object as a fallback
    console.log("problem =", problem);
    
    // Assuming problem.examples is an array, directly assign it to examples
    let examples: exampleArr = problem?.examples || { examples: [] };

    return (
        <div className={"bodyProblem"}>

            <div className={"problemDefinition"}>
                <div >
                    <Typography variant={"h4"} gutterBottom margin={"dense"}>{problem.title}</Typography>
                </div>
                <div >
                    <Typography variant={"body1"} gutterBottom>{problem.description}</Typography>
                </div>
                <div>
                    <Typography variant={"overline"}>{"Examples:"}</Typography>
                </div>
                <div>
                    {examples &&
                        Object.values(examples).map((exp, index) => {
                            const example = Object.values(exp)[0];
                            let input, output, explanation;

                            input = example?.input;

                            output = example?.output;

                            explanation = example?.explanation;

                            return (
                                <div key={index}>
                                    <Typography variant="button">Example {index + 1}</Typography>
                                    {input && (
                                        <div>
                                            <Typography variant="overline">Input: {input}</Typography>
                                        </div>
                                    )}
                                    {output && (
                                        <div>
                                            <Typography variant="overline">Output: {output}</Typography>
                                        </div>
                                    )}
                                    {explanation && (
                                        <div>
                                            <Typography variant="overline">Explanation: {explanation}</Typography>
                                        </div>
                                    )}
                                    <br />
                                </div>
                            );
                        })}
                </div>
            </div>
            <CodingArena problem={problem} />
        </div>
    );
}