import { BasicBox } from "../components/demos/BasicBox";
import { GestureBox } from "../components/demos/GestureBox";
import { KeyframeBox } from "../components/demos/KeyframeBox";

export const demos = [
    {
        slug: "basic-box",
        title: "Basic Animation",
        component: BasicBox,
        description:
            "সবচেয়ে সাধারণ অ্যানিমেশন। initial এবং animate prop ব্যবহার করে একটি কম্পোনেন্টের শুরু এবং শেষের অবস্থা নির্ধারণ করা হয়।",
        defaultProps: {
            duration: 0.8,
            scale: 1,
            rotate: 0,
        },
        controls: [
            {
                name: "duration",
                label: "Duration",
                type: "range",
                min: 0.1,
                max: 3,
                step: 0.1,
            },
            {
                name: "scale",
                label: "Scale",
                type: "range",
                min: 0.1,
                max: 2,
                step: 0.1,
            },
            {
                name: "rotate",
                label: "Rotate",
                type: "range",
                min: 0,
                max: 360,
                step: 1,
            },
        ],
    },
    // KeyframeBox, AnimatedButton, ইত্যাদি এখানে যোগ করা হবে
    {
        slug: "keyframes",
        title: "Keyframes",
        component: KeyframeBox,
        description: "একটি নির্দিষ্ট সময়ের মধ্যে একাধিক ধাপে অ্যানিমেশন চালানো।",
        defaultProps: {},
        controls: [],
    },
    {
        slug: "gestures",
        title: "Gestures",
        component: GestureBox,
        description:
            "Hover, tap, এবং focus-এর মতো ইউজার ইন্টারেকশনের উপর ভিত্তি করে অ্যানিমেশন।",
        defaultProps: {},
        controls: [],
    },
];
