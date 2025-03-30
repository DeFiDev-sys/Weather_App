"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { z } from "zod";
import { searchFormScheme } from "@/hooks/difinition";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { useWeatherState } from "@/context/weatherStore";
import { Button } from "./ui/button";

const SearchBar = () => {
  const { setCity, fetchWeather, isLoading } = useWeatherState();

  const form = useForm<z.infer<typeof searchFormScheme>>({
    resolver: zodResolver(searchFormScheme),
    defaultValues: {
      query: "",
    },
  });

  const onSubmit = (values: z.infer<typeof searchFormScheme>) => {
    if (!values.query) {
      return <p>Input a valid city please</p>;
    }
    setCity(values.query);
    fetchWeather(values.query);
    form.reset({
      query: "",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5  shadow-xl  p-10 my-2'>
        <FormField
          control={form.control}
          name='query'
          render={({ field }) => (
            <FormItem>
              <FormLabel>City:</FormLabel>
              <FormControl>
                <Input placeholder='Search for city' type='search' {...field} className='p-5 placeholder:my-auto' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' disabled={isLoading} className='min-w-full lg:min-w-1/3 p-5 cursor-pointer'>
          {isLoading ? "Loading ..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
