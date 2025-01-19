import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useState } from "react";
import StepOne from "./_components/step-one";
import StepTwo from "./_components/step-two";
import FormProgressBar from "~/components/form-progress-bar";
import StepThree from "./_components/step-three";
import { zodResolver } from "@hookform/resolvers/zod";
import { getArtistAccountDefaults } from "~/constants/artist-account-default";
import {
  artistAccountSchema,
  TArtistAccountFormSchema,
} from "~/schema/artist.schema";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

const SetupForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<TArtistAccountFormSchema>({
    defaultValues: getArtistAccountDefaults(),
    resolver: zodResolver(artistAccountSchema),
    mode: "onChange",
  });

  const { fields: experienceFields } = useFieldArray({
    control: form.control,
    name: "experiences",
  });

  const steps = [
    {
      id: "Step 1",
      title: "Personal",
      description: "Please provide your personal details",
      fields: [
        "firstName",
        "lastName",
        "gender",
        "dob",
        "email",
        "phoneNumber",
        "address.country",
        "address.street",
        "address.city",
        "address.state",
        "address.zip",
      ],
    },
    {
      id: "Step 2",
      title: "Experiences",
      fields: experienceFields
        ?.map((_, singleFieldIdx) => {
          return [
            `experiences.${singleFieldIdx}.experienceTitle`,
            `experiences.${singleFieldIdx}.experienceDescription`,
            `experiences.${singleFieldIdx}.experienceCompany`,
            `experiences.${singleFieldIdx}.experienceStartDate`,
            `experiences.${singleFieldIdx}.experienceEndDate`,
          ];
        })
        .flat(),
    },
    {
      id: "Step 3",
      title: "Submission",
    },
  ];

  const prev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
    console.log("Prev is clicked");
  };

  type FieldName = keyof TArtistAccountFormSchema;
  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });
    if (!output) return;
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const onSubmit = (value) => {
    console.log("submitted");
    console.log(value);
  };

  return (
    <SafeAreaView className="flex-1">
      <FormProvider {...form}>
        <FormProgressBar />
        <View className="p-6">
          {currentStep === 0 && <StepOne />}
          {currentStep === 1 && <StepTwo />}
          {currentStep === 2 && <StepThree />}

          <View className="flex flex-row justify-between pt-10">
            <TouchableOpacity
              onPress={prev}
              disabled={currentStep === 0}
              className=" p-2 rounded-md bg-secondary w-20"
            >
              <Text className="text-white">Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={next}
              className=" p-2 bg-secondary rounded-md w-20"
            >
              <Text className="text-white text-center">Next</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={form.handleSubmit(onSubmit)}
              className="bg-red-400"
            >
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </FormProvider>
    </SafeAreaView>
  );
};

export default SetupForm;
