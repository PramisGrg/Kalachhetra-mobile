import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import { Label } from "@rn-primitives/select";
import { Input } from "~/components/ui/input";
import { Delete, Plus, Trash } from "lucide-react-native";

const StepTwo = () => {
  const { control, register } = useForm();

  const {
    fields: experienceFields,
    append: experienceAppend,
    remove: experienceRemove,
  } = useFieldArray({
    control,
    name: "experiences",
  });
  return (
    <View>
      {/* Dynamic Fields for Experiences */}
      <ScrollView>
        {experienceFields.map((field, index) => (
          <View key={field.id} className="mb-6">
            <View className="flex flex-row justify-between">
              <Text className="text-lg font-bold mb-4">
                Work Experiences #{index + 1}
              </Text>
              <TouchableOpacity onPress={() => experienceRemove(index)}>
                <Trash size={20} color={"red"} />
              </TouchableOpacity>
            </View>
            <View>
              <Label>Job Title</Label>
              <Input
                placeholder="Enter your job title"
                {...register(`experiences.${index}.jobTitle`)}
              />
            </View>

            <View className="mt-4">
              <Label>Job Company</Label>
              <Input
                placeholder="Enter your job company"
                {...register(`experiences.${index}.company`)}
              />
            </View>

            <View className="flex flex-row gap-4 justify-between mt-4">
              <View className="flex-1">
                <Label>Job Start Date</Label>
                <Input
                  placeholder="Job start date"
                  {...register(`experiences.${index}.startDate`)}
                />
              </View>
              <View className="flex-1">
                <Label>Job End Date</Label>
                <Input
                  placeholder="Job end date"
                  {...register(`experiences.${index}.endDate`)}
                />
              </View>
            </View>
          </View>
        ))}

        <TouchableOpacity
          onPress={() =>
            experienceAppend({
              jobTitle: "",
              company: "",
              startDate: "",
              endDate: "",
            })
          }
        >
          <Plus />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default StepTwo;
