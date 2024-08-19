
//libraries
import React from 'react'
import {
    Text, View,
    ScrollView,
    RefreshControl,
    ActivityIndicator,
    SafeAreaView,
} from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';

// components
import {
    Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics
} from "../../components";

//constants
import { COLORS, SIZES, icons } from "../../constants";

//hooks
import { useFetch } from "../../hooks/useFetch";

const TABS = ["About", "Qualifications", "Responsibilities"]

const JobDetails = () => {

    const params = useSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch("job-details",
        { job_id: params.id }
    );

    const [refreshing, setRefreshing] = useState(false);
    const [activetab, setActivetab] = useState(TABS[0]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    }, []);

    function displayTabContent() {
        switch (activetab) {
            case "Qualifications":
                return (
                    <Specifics
                        title={"Qualifications"}
                        points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
                    />
                )
            case "About":
                return (
                    <JobAbout
                        info={data[0].job_description ?? "No data provided"}
                    />
                )
            case "Responsibilities":
                return (
                    <Specifics
                        title={"Responsibilities"}
                        points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
                    />
                )
            default:
                break;
        }
    }

    return (
        // ensure all part of the page are visible
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            {/* handle the upper part of the screen */}
            <Stack.Screen
                options={{
                    headetStyles: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false, // remove the shadow line at the top of the screen
                    headerBackVisible: false,
                    // display the left button on the header screen
                    headerLeft: () => {
                        return <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()}
                        />
                    },
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension="60%"
                            handlePress={() => { }} // TODO: handle the share later
                        />
                    ),
                    headertitle: "" // remove the header title displayed at the top of the page
                }}
            />
            <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <>
                        {isLoading ? (
                            <ActivityIndicator
                                size="large"
                                color={COLORS.primary}
                            />
                        ) : error ? (
                            <Text>Something went wrong</Text>
                        ) : data.length === 0 ? (
                            <Text>No data</Text>
                        ) : (
                            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>

                                {/* show the company data */}
                                <Company
                                    company={data[0].employer}
                                />

                                {/* show the job data */}
                                <JobTabs
                                    tabs={data[0].job_snippet}
                                    activetab={activetab}
                                    setActivetab={setActivetab}
                                />

                                {/* show the job description */}
                                {/* <JobAbout info={data[0].job_description} /> */}

                                {displayTabContent()}

                            </View>
                        )}
                    </>
                </ScrollView>

                <JobFooter url={data[0]?.job_google_link ?? "https://careers.google.com/jobs/results"} />
            </>
        </SafeAreaView>
    )
};

export default JobDetails;
