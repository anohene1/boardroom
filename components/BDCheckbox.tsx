import React, { ComponentProps } from "react";
import {Checkbox} from "@heroui/react";

type Props = ComponentProps<typeof Checkbox>;

export default function BDCheckbox(props: Props) {
    return (
        <Checkbox
            radius="none"
            size="sm"
            {...props}
            classNames={{
                label: "text-sm ml-2",
                wrapper: "outline-black border-none rounded overflow-hidden size-3.5",
                base: "checkbox"
            }}
        >
            {props.children}
        </Checkbox>
    );
}
