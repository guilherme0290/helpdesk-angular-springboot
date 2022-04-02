package com.guilherme.helpdesk.resources.exceptions;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;

public class FieldMessage implements Serializable {


    //@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})


    private  String fieldName;
    private String message;

    public FieldMessage(String fieldName, String message) {
        super();
        this.fieldName = fieldName;
        this.message = message;
    }

    public FieldMessage() {
        super();
    }

    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
