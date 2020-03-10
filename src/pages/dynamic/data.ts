const data = [
    {
        "type": "div",
        "title": "通用布局块",
        "is_native": true,
        "can_place": true,
        "props":
        {
            "style": {
                "minHeight": 20, "padding": "20px",
                "height": 356, "width": 1142
            }
        }, "config": {
            "style": {
                "padding": {
                    "text": "内间距", "type": "4-value"
                },
                "margin": { "text": "外边距", "type": "4-value" },
                "backgroundColor": { "text": "背景色", "type": "color" }
            }
        },
        "id": 7512,
        "childrens": [{
            "type": "div",
            "title": "通用布局块",
            "is_native": true,
            "can_place": true,
            "props": {
                "style": {
                    "minHeight": 20,
                    "padding": "20px 20px 50px 20px",
                    "margin": "0 0 20 0"
                }
            },
            "config": {
                "style": {
                    "padding": {
                        "text": "内间距",
                        "type": "4-value"
                    },
                    "margin": {
                        "text": "外边距",
                        "type": "4-value"
                    },
                    "backgroundColor": {
                        "text": "背景色",
                        "type": "color"
                    }
                }
            },
            "id": 7513,
            "childrens": [{
                "type": "Button",
                "title": "按钮",
                "props":
                {
                    "type": "primary",
                    "content": "按钮一只",
                    "style": { "margin": "0px 10px 20px 0px" }
                },
                "config": {
                    "type": {
                        "text": "主题",
                        "enum": ["primary", "default", "dashed", "danger"]
                    },
                    "icon": { "text": "图标" },
                    "content": { "text": "文案" },
                    "style": {
                        "width": { "text": "宽度" },
                        "margin": { "text": "外边距", "type": "4-value" }
                    }
                },
                "id": 7514
            }, {
                "type": "Input",
                "title": "输入框",
                "props": {
                    "placeholder":
                        "这是一个输入框", "type": "text",
                    "style": { "width": 1022, "height": 57 }
                },
                "config": {
                    "placeholder":
                        { "text": "默认提醒" },
                    "type": {
                        "text": "是否多行文本",
                        "enum": ["textarea", "text"]
                    },
                    "style": { "width": { "text": "宽度" } }
                }, "id": 7516
            }, {
                "type": "DatePicker",
                "title": "日期选择器",
                "wrap": true,
                "props": {
                    "style":
                        { "margin-top": 100 }
                },
                "config": {
                    "style": {
                        "width":
                            { "text": "宽度" }
                    }
                },
                "id": 7517,
                "hasDelete": true
            }, {
                "type": "Switch",
                "title": "开关切换",
                "props": {
                    "size": "default",
                    "onChange": () => { alert('123') }
                },
                "config": {
                    "size": { "text": "大小", "enum": ["default", "small"] }
                }, "id": 7518
            }]
        }]
    }];
export default data;