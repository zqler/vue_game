//封装axios
import Vue from "vue";
import * as _ from "lodash";
import util from "util/util";
import axios from "axios";
import { constants } from "./types";

function commonDeal(promise, success, fail) {
    if (!_.isFunction(success)) {
        success = Empty;
    }
    if (!_.isFunction(fail)) {
        fail = Empty;
    }
    return new Promise((resolve, reject) => {
        const jsonReg = /\{.+\}/;
        promise.then(
            ({ data }) => {
                let ret = _.isString(data) ?
                    jsonReg.test(data) ? util.toJSON(data) : { errmsg: data } :
                    data;
                if (ret.errcode == 0) {
                    if (ret.resultData) {
                        ret = data.resultData;
                    } else {
                        ret = true;
                    }
                    success(ret);
                    resolve(ret);
                } else {
                    fail(ret);
                    reject(ret);
                }
            },
            ({ data }) => {
                const ret = _.isString(data) ?
                    jsonReg.test(data) ? util.toJSON(data) : { errmsg: data } :
                    data;
                fail(ret);
                reject(ret);
            }
        );
    });
}

function Empty() {}

const http = {};
["get", "head", "jsonp", "delete"].forEach(method => {
    http[method] = function(url, data, opt, success, fail) {
        const settings = {
            params: { AdminID: sessionStorage.getItem(constants.USER_ID_KEY) }
        };
        if (_.isFunction(data)) {
            success = data;
            fail = opt;
            opt = {};
            opt.params = {};
        } else if (_.isFunction(opt)) {
            fail = success;
            success = opt;
            opt = { params: data };
        } else if (_.isEmpty(data)) {
            opt = {};
            opt.params = {};
        } else {
            opt.params = data;
        }

        return commonDeal(
            axios[method](url, util.assign(true, settings, opt)),
            success,
            fail
        );
    };
});
["post", "put", "patch"].forEach(method => {
    http[method] = function(url, data, opt, success, fail) {
        const settings = { AdminID: sessionStorage.getItem(constants.USER_ID_KEY) };
        if (_.isFunction(opt)) {
            fail = success;
            success = opt;
            opt = {};
        }
        return commonDeal(
            axios[method](url, util.assign(true, settings, data), opt),
            success,
            fail
        );
    };
});

export default http;